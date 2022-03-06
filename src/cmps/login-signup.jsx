import { useState, useEffect } from 'react'


export function LoginSignup({ onLogin, toggleSignIn, isSignUp, toggleSignUp }) {

    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isSignup, setIsSignup] = useState(isSignUp)


    useEffect(() => {
        const { username, password } = credentials
        if (username === 'guest' && password === 'guest') {
            onLogin(credentials);
            clearState()
            toggleSignIn(false)
        }
    }, [credentials]);

    const clearState = () => {
        setCredentials({ username: '', password: '', fullname: '' })
    }

    const handleChange = ev => {
        const field = ev.target.name;
        const value = ev.target.value;
        setCredentials({ ...credentials, [field]: value });
    }

    const onGuestMode = () => {
        setCredentials({ username: 'guest', password: 'guest', fullname: '' })

    }
    const login = (ev = null) => {
        if (ev) ev.preventDefault();
        if (!credentials.username) return;
        onLogin(credentials);
        toggleSignIn(false)
        clearState()
    }

    const onSignup = (ev = null) => {
        if (ev) ev.preventDefault();
        if (!credentials.username || !credentials.password || !credentials.fullname) return;
        onSignup(credentials);
        clearState()
        toggleSignIn(false)
    }

    const toggleSignup = (ev) => {
        ev.stopPropagation()
        setIsSignup(!isSignup)
    }

    const stopPropagation = (ev) => {
        ev.stopPropagation()
    }

    return (
        <div className="login-background flex justify-center align-center" onClick={() => { toggleSignIn(false); toggleSignUp(false); }}>
            <div className="signIn-up-section" onClick={stopPropagation}>
                {!isSignup && <section>
                    <h4>Sign In to Ninerr</h4>
                    <form className="login-form" onSubmit={login} >
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


                </section>}
                <div className="form-footer flex justify-center align-center">
                    <p><span onClick={onGuestMode} className="green pointer">Try as a guest</span></p>
                </div>

            </div>
        </div>
    )
}
