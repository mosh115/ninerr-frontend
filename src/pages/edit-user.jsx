import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom";
import { utilService } from '../services/util.service';
import { updateUser } from '../store/user.actions';

function _EditUser({ user, updateUser }) {
    console.log('user in edit', user);
    // console.log(utilService.getReviewer());
    let navigate = useNavigate();


    useEffect(() => {
        if (!user) navigate('/');
    }, [])


    const [inputValues, setInputValue] = useState({
        fullname: user.fullname || "",
        username: user.username || "",
        shortAbout: user.shortAbout || "",
        about: user.about || "",
        from: user.from || "",
        reviews: ""
    });

    function handleChange(ev) {
        const { name, value } = ev.target;
        setInputValue({ ...inputValues, [name]: value });

    }
    function handleChange1(ev) {
        const { name, value } = ev.target;
        const arr = value.split(',')
        setInputValue({ ...inputValues, [name]: arr });
    }


    function handleSubmit(ev) {
        ev.preventDefault();
        // const reviews = []
        const reviews = inputValues.reviews.map(review => {
            const reviewer = utilService.getReviewer()
            return {
                id: utilService.makeId(10),
                txt: review,
                rate: utilService.getRandomIntInclusive(4, 5),
                by: {
                    _id: utilService.makeId(10),
                    fullname: reviewer.uname,
                    country: reviewer.country,
                }
            }
        })
        const userToUpdate = { ...user, ...inputValues, reviews }
        // console.log('edit-user', userToUpdate);
        updateUser(userToUpdate)
        navigate('/profile')


    }


    if (!user) return <h1>Loading</h1>
    return (
        <div className='add-gig main-container'>
            <div className="gig-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label> Full name
                            <input
                                placeholder="Full name"
                                type="text"
                                name="fullname"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.fullname}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label> User name
                            <input
                                placeholder="User name"
                                type="text"
                                name="username"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.username}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label>Short About
                            <input
                                placeholder="shortAbout"
                                type="text"
                                name="shortAbout"
                                id="shortAbout"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.shortAbout}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label>About
                            <textarea
                                placeholder="about"
                                type="text"
                                id="about"
                                name="about"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.about}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label >From
                            <input
                                placeholder="e.g United State"
                                type="text"
                                id="from"
                                name="from"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.from}
                                required
                            />
                        </label>
                    </div>


                    <h1>Reviews</h1>

                    <div className="form-control">
                        <label>reviews
                            <textarea
                                placeholder="reviews (comma-seperated)"
                                type="text"
                                id="reviews"
                                name="reviews"
                                className="input-field"
                                onChange={(e) => handleChange1(e)}
                                value={inputValues.reviews}
                            // required
                            />
                        </label>
                    </div>
                    <button type="submit">
                        submit
                    </button>

                </form>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state.userModule.user,
    }
}
const mapDispatchToProps = {
    updateUser,

}

export const EditUser = connect(mapStateToProps, mapDispatchToProps)(_EditUser)