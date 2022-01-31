import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart } from "react-icons/fa";
import ImageGallery from 'react-image-gallery';
import { AvatarPicture } from './user-avatar-picture';




export function GigPreview({ gig }) {

    function getNumOfRaters() {
        let raters = gig.owner.raters;
        let num = raters;
        if (raters > 1000 && raters < 1300) num = '1K+'
        if (raters >= 1300 && raters < 1400) num = '2K+'
        return num
    }
    // console.log(gig);

    const images = gig.imgUrls.map(img => { return { original: img } })


    return (
        <article className="gig-preview" key={gig._id}>
            <div className='carusel'>
                {/* <Link className='clean-link' to={`/gig/${gig._id}`}> */}

                <ImageGallery items={images} showThumbnails={false} showPlayButton={false} showFullscreenButton={false} showBullets={true} />

                {/* </Link> */}
            </div>


            <section className='preview-card'>

                <section className='seller-info flex'>
                    {/* <AvatarPicture user={gig.owner} size={'24px'} isGrey={false} /> */}
                    <img className='avatar' src={gig.owner.imgUrl} />
                    <div>
                        <Link className='seller-name' to={'/#'}> {gig.owner.fullname}</Link>
                        <p className='seler-level'>{gig.owner.level}</p>
                    </div>
                </section>

                <h3><Link className='gig-title clean-link' to={`/gig/${gig._id}`}> {gig.title}</Link></h3>
                <section className='gig-rating flex'>
                    <FaStar className='star' />
                    {/* <span className='star'>{star}</span> */}
                    <p className='rating'>{gig.owner.rate} </p>
                    <p className='raters'>({getNumOfRaters()})</p>
                </section>
                <footer className='footer flex'>
                    <FaHeart className='heart' />
                    {/* <div>{heart}</div> */}
                    <Link to={`/gig/${gig._id}`} className='clean-link'>
                        <div className='price-wrapper'>
                            <small className='small'>STARTING AT  </small>
                            <span className='price'>${gig.price} </span>
                        </div>
                    </Link>
                </footer>
            </section>

        </article>
    )
}
