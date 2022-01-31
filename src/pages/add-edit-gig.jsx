import React, { useState } from 'react';
import { uploadImg } from '../services/cloudinary.service';
import { connect } from "react-redux"
import { addGig } from '../store/gig.actions';
import { utilService } from '../services/util.service';
import { useNavigate } from "react-router-dom";

function _AddEditGig({ user, addGig }) {
    let navigate = useNavigate();

    const [inputValues, setInputValue] = useState({
        title: "",
        price: "",
        daysToMake: "",
        description: "",
        imgUrls: "",
        tags: "",
        orderTitle: "",
        orderDesc: "",
        orderdetails: ""
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

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(inputValues);
        const newGig = {
            ...inputValues, owner: {
                _id: user._id,
                fullname: user.fullname,
                imgUrl: user.imgUrl,
                level: utilService.makeLevel(),
                rate: utilService.makeRate(),
                raters: utilService.getRandomIntInclusive(3, 1400),
                avatarColor: user.avatarColor
            }
        }
        addGig(newGig)
        navigate('/profile')
    }
    // window.makeLevel


    async function onUploadImg(ev) {
        // console.log(typeof ev.target.files);        
        const urls = []

        Object.values(ev.target.files).forEach(async (file) => {
            const url = await uploadImg(file)
            urls.push(url)
            // console.log(urls);
            setInputValue({ ...inputValues, imgUrls: urls });
        })
    }



    return (
        <div className='add-gig main-container'>
            <div className="gig-form">
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-control">
                        <label>Title
                            <input
                                placeholder="Title"
                                type="string"
                                name="title"
                                id="title"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.title}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label>Price
                            <input
                                placeholder="Price"
                                type="number"
                                id="price"
                                name="price"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.price}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label >Days To Make
                            <input
                                placeholder="Days To Make"
                                type="number"
                                id="daysToMake"
                                name="daysToMake"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.daysToMake}
                                required
                            />
                        </label>
                    </div>

                    <div className="form-control">
                        <label> Description
                            <textarea
                                placeholder="Description"
                                type="text"
                                name="description"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.description}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label>Images
                            <input
                                type="file"
                                multiple
                                name="imgUrls"
                                className="input-field"
                                onChange={(e) => onUploadImg(e)}
                                required />
                        </label>
                    </div>
                    <div className="form-control">
                        <label>Tags

                            <textarea
                                placeholder="comma-seperated tags"
                                type="text"
                                name="tags"
                                className="input-field"
                                onChange={(e) => handleChange1(e)}
                                value={inputValues.tags}
                                required />
                        </label>
                    </div>

                    <b>Order Details</b>

                    <div className="form-control">
                        <label >Order title
                            <input
                                placeholder="Order title"
                                type="text"
                                id="orderTitle"
                                name="orderTitle"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.orderTitle}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label >Order description
                            <input
                                placeholder="Order description"
                                type="text"
                                id="orderDesc"
                                name="orderDesc"
                                className="input-field"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.orderDesc}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label >Order Details
                            <textarea
                                placeholder="Order details(comma-seperated)"
                                type="text"
                                id="orderdetails"
                                name="orderdetails"
                                className="input-field"
                                onChange={(e) => handleChange1(e)}
                                value={inputValues.orderdetails}
                                required
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
    addGig
    // updateUser,

}

export const AddEditGig = connect(mapStateToProps, mapDispatchToProps)(_AddEditGig)