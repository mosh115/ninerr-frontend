import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar, FaHeart } from "react-icons/fa";
import ImageGallery, { LeftNav } from 'react-image-gallery';





export function GigPreview({ gig }) {
    const navigate = useNavigate();

    const getNumOfRaters = () => {
        let raters = gig.owner.raters;
        let num = raters;
        if (raters > 1000 && raters < 1300) num = '1K+'
        if (raters >= 1300 && raters < 1400) num = '2K+'
        return num
    }

    const onClick = (e, link) => {
        navigate(link)

    }



    const images = gig.imgUrls.map(img => { return { original: img } })


    return (
        <article className="gig-preview" key={gig._id}>
            <div className='carusel'>
                <ImageGallery items={images} showThumbnails={false}
                    showPlayButton={false} showFullscreenButton={false}
                    showBullets={true}
                    onClick={(e) => onClick(e, `/gig/${gig._id}`)}
                />
            </div>


            <section className='preview-card'>

                <section className='seller-info flex'>
                    <img className='avatar' src={gig.owner.imgUrl} alt="avatar" />
                    <div>
                        <Link className='seller-name' to={'/#'}> {gig.owner.fullname}</Link>
                        <p className='seler-level'>{gig.owner.level}</p>
                    </div>
                </section>

                <h3><Link className='gig-title clean-link' to={`/gig/${gig._id}`}> {gig.title}</Link></h3>
                <section className='gig-rating flex'>
                    <FaStar className='star' />
                    <p className='rating'>{gig.owner.rate} </p>
                    <p className='raters'>({getNumOfRaters()})</p>
                </section>
                <footer className='footer flex'>
                    <FaHeart className='heart' />
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
