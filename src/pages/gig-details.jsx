import React from 'react';
import { connect } from "react-redux"
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { gigService } from '../services/gig.service';
import { userService } from '../services/user.service';
import { utilService } from '../services/util.service';
import ImageGallery from 'react-image-gallery';
import { FaStar, FaCheck, FaSyncAlt } from "react-icons/fa";
import { ImClock } from "react-icons/im";
import { ReviewItem } from '../cmps/review-item';
import { TableRating } from '../cmps/table-rating';
import { AvatarPicture } from '../cmps/user-avatar-picture';
import { addOrder } from '../store/order.actions'
import { Loader } from '../cmps/Loader';
import { showErrorMsg } from '../services/event-bus.service';



function _GigDetails({ user, addOrder }) {
    // console.log(user);

    const [gig, setGig] = useState()
    const [userSeller, setUserSeller] = useState()

    useEffect(() => {
        loadGigAndSeller()
    }, [])


    const { gigId } = useParams();

    async function loadGigAndSeller() {
        let gig = await gigService.getById(gigId)
        // console.log('gig', gig);
        const seller = await userService.getById(gig.owner._id)
        // console.log('seller', seller);
        setGig(gig)
        setUserSeller(seller)
    }

    function onMakeOrder() {
        // console.log('place order');
        if (!user) {
            showErrorMsg('Plese login')
            return
        }
        const newOrder = {
            buyer: {
                ...user
            },
            seller: {
                ...userSeller
            },
            gig: {
                ...gig
            },
            status: "pending"
        }

        // console.log(newOrder);
        addOrder(newOrder)

    }


    function getRandomNum() {
        return utilService.getRandomIntInclusive(1, 80)
    }

    // function getNumOfRaters() {
    //     let raters = gig.owner.raters;
    //     let num = raters;
    //     if (raters > 1000 && raters < 1300) num = '1K+'
    //     if (raters >= 1300 && raters < 1400) num = '2K+'
    //     return num
    // }



    if (!gig || !userSeller) return <Loader />
    const images = gig.imgUrls.map(img => { return { original: img, thumbnail: img } })

    return (
        <section className='gig-details flex '>

            <section className='details-container'>
                <div className='gig-overview'>
                    <h1 className='title'>{gig.title}</h1>
                </div>
                <div className='seller-overview flex'>
                    <AvatarPicture user={gig.owner} size={'32px'} isGrey={false} />
                    {/* <img className='avatar' src={userSeller.imgUrl || `https://i.pravatar.cc/24?u=${userSeller._id}`} /> */}
                    <Link to={'/#'}> {gig.owner.fullname}</Link>
                    <p className='seller-level'>{gig.owner.level} <span className='stop'>|</span></p>
                    <ReactStars classNames="stars" count={+gig.owner.rate} size={15} color="#ffb33e" activeColor="#ffb33e" edit={false} />
                    <b className='rating'>{gig.owner.rate} </b>
                    <p className='raters'>({gig.owner.raters})<span className='stop'>|</span></p>
                    <p className='qweue'><span>{getRandomNum()}</span> Orders in Queue</p>
                </div>

                <div className='gallery'>
                    <ImageGallery items={images} showThumbnails={true} showPlayButton={false} />
                </div>


                <div className='about-gig'>
                    <h2>About This Gig</h2>
                    <p>{gig.title}</p>
                    <p>{gig.description}</p>
                </div>

                <h2>About The Seller</h2>
                <div className='about-seller flex'>
                    <div className='profile-info'>
                        <AvatarPicture user={gig.owner} size={'110px'} isGrey={false} />
                        {/* <img className='avatar' src={userSeller.img || `https://i.pravatar.cc/110?u=${gig._id}`} /> */}
                    </div>
                    <div className='seller-info'>
                        <Link className='name' to={'/#'}> {gig.owner.fullname}</Link>
                        <p>{userSeller.shortAbout}</p>
                        <div className='flex'>
                            <ReactStars count={+gig.owner.rate} size={16} color="#ffb33e" activeColor="#ffb33e" edit={false} />
                            <p className='rating'>{+gig.owner.rate} </p>
                            <p className='raters'>({+gig.owner.raters})</p>

                        </div>
                        <button className='btn-contact-me'>Contact Me</button>
                    </div>
                </div>
                <div className='table-info'>
                    <ul className='stats clean-list flex'>
                        <li className='flex column'>From<strong>{userSeller.from}</strong></li>
                        <li className='flex column'>Member since<strong>2015</strong></li>
                        <li className='flex column'>Avg. response time<strong>1 hour</strong></li>
                        <li className='flex column'>Last Delivey<strong>1 day</strong></li>
                    </ul>
                    <p>{userSeller.about}</p>
                </div>

                <div className='reviews'>
                    <div className='details flex align-center'>
                        <h2 className='flex'>{gig.owner.raters} Reviews
                            <ReactStars
                                count={+gig.owner.rate}
                                size={16}
                                color="#ffb33e"
                                activeColor="#ffb33e"
                                edit={false}
                            />
                            <p className='rating'>{gig.owner.rate} </p>
                        </h2>
                    </div>
                    <div className='flex' >
                        <TableRating />
                        <section className='ranking'>
                            <h6>Rating Breakdown</h6>
                            <ul className='clean-list'>
                                <li className='flex space-between'>Seller communication level <span> 5 <FaStar className='star' /></span></li>
                                <li className='flex space-between'>Recommend to a friend <span> 4.9 <FaStar className='star' /></span></li>
                                <li className='flex space-between'>Service as described <span> 4.9 <FaStar className='star' /></span></li>
                            </ul>
                        </section>
                    </div>
                </div>
                {userSeller.reviews && userSeller.reviews.map((review, idx) => <ReviewItem review={review} key={review.id} />)}


            </section>
            <aside className='aside'>
                <div className='package-content'>
                    <h1 className='gig-label'>Package details</h1>
                    <header>
                        <h3>
                            {gig.orderTitle}
                            <div className='price-wrapper'>${gig.price}</div>
                        </h3>

                        <p className='order-description'>{gig.orderDesc}</p>
                    </header>
                    <div className='additional-info'>
                        <h3 className='delievery-wrapper'>
                            <span><ImClock /></span>

                            {gig.daysToMake} Days Delievery
                        </h3>
                        <h3 className='revisions-wrapper'>
                            <span><FaSyncAlt /></span>
                            Unlimited Revisions
                        </h3>
                    </div>
                    <div className='gig-features'>
                        <ul>
                            {gig.orderdetails.map((tag, idx) => { return (<li key={idx} className='clean-list'><span><FaCheck /></span>{tag}</li>) })}
                        </ul>
                    </div>

                    <button onClick={onMakeOrder}>Continue <span>(${gig.price})</span></button>
                </div>
            </aside>


        </section>
    )
}

function mapStateToProps(state) {
    return {
        user: state.userModule.user,
    }
}
const mapDispatchToProps = {
    addOrder,

}

export const GigDetails = connect(mapStateToProps, mapDispatchToProps)(_GigDetails)
