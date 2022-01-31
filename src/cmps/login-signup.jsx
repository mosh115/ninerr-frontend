import { useState, useEffect } from 'react'
import { userService } from '../services/user.service'
import { useHistory, useLocation } from "react-router-dom";
import { socketService } from '../services/socket.service';

export function LoginSignup(props) {
    // let history = useHistory();
    // let location = useLocation();
    // console.log(props);
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isSignup, setIsSignup] = useState(props.isSignUp)
    const [users, setUsers] = useState([])

    useEffect(async () => {
        const users = await userService.getUsers()
        setUsers(users)
    }, [])

    useEffect(() => {
        const { username, password } = credentials
        if (username === 'guest' && password === 'guest') {
            props.onLogin(credentials);
            clearState()
        }
    }, [credentials]);

    const clearState = () => {
        setCredentials({ username: '', password: '', fullname: '' })
        setIsSignup(false)
    }

    const handleChange = ev => {
        const field = ev.target.name;
        const value = ev.target.value;
        setCredentials({ ...credentials, [field]: value });
    }

    function onGuestMode() {
        setCredentials({ username: 'guest', password: 'guest', fullname: '' })
    }
    const onLogin = (ev = null) => {
        if (ev) ev.preventDefault();
        if (!credentials.username) return;
        props.onLogin(credentials);


        clearState()
        // history.push(location.pathname);
    }

    const onSignup = (ev = null) => {
        if (ev) ev.preventDefault();
        if (!credentials.username || !credentials.password || !credentials.fullname) return;
        props.onSignup(credentials);
        clearState()
        // history.push(location.pathname);
    }

    const toggleSignup = (ev) => {
        ev.stopPropagation()
        setIsSignup(!isSignup)
    }

    const stopPropagation = (ev) => {
        ev.stopPropagation()
    }

    return (
        <div className="login-background flex justify-center align-center" onClick={() => { props.toggleSignIn(false); props.toggleSignUp(false); }}>
            <div className="signIn-up-section" onClick={stopPropagation}>
                {!isSignup && <section>
                    <h4>Sign In to Ninerr</h4>
                    <form className="login-form" onSubmit={onLogin} >
                        {/* <select
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                        >
                            <option value="">Select User</option>
                            {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
                        </select> */}
                        <input
                            type="text"
                            name="username"
                            value={credentials.username}
                            placeholder="Email / Username"
                            onChange={handleChange}
                            required
                            autoComplete="true"
                            autoFocus
                        />
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            placeholder="Password"
                            onChange={handleChange}
                            required
                            autoComplete="false"
                        />
                        <button>Continue</button>
                    </form>
                    <div className="form-footer flex justify-center align-center">
                        <p>Not a member yet? <span onClick={toggleSignup} className="green pointer">Join now</span>
                        </p>
                    </div>
                </section>}
                {isSignup && <section>
                    <h4>Join Ninerr</h4>
                    <form className="signup-form" onSubmit={onSignup}>
                        <input
                            type="text"
                            name="fullname"
                            value={credentials.fullname}
                            placeholder="Fullname"
                            onChange={handleChange}
                            required
                            autoFocus
                            autoComplete="true"
                        />
                        <input
                            type="text"
                            name="username"
                            value={credentials.username}
                            placeholder="Username"
                            onChange={handleChange}
                            required
                            autoComplete="true"
                        />
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            placeholder="Password"
                            onChange={handleChange}
                            required
                            autoComplete="false"
                        />
                        <button>Continue</button>
                    </form>
                    <div className="form-footer flex justify-center align-center">
                        <p>Already a member? <span onClick={toggleSignup} className="green pointer">Sign In</span>
                        </p>

                    </div>

                    {/* <hr></hr> */}

                </section>}
                <div className="form-footer flex justify-center align-center">
                    <p><span onClick={onGuestMode} className="green pointer">Try as a guest</span></p>
                </div>
                {/* <p>
                    <button className="btn-link" onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button>
                </p> */}
            </div>
        </div>
    )
}
