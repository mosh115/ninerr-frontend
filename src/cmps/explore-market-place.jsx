import React from 'react';
import { Link } from "react-router-dom"
import img1 from '../assets/img/home-page/explore-the-marketplace/graphics-design.svg';
import img2 from '../assets/img/home-page/explore-the-marketplace/online-marketing.svg';
import img3 from '../assets/img/home-page/explore-the-marketplace/writing-translation.svg';
import img4 from '../assets/img/home-page/explore-the-marketplace/video-animation.svg';
import img5 from '../assets/img/home-page/explore-the-marketplace/music-audio.svg';
import img6 from '../assets/img/home-page/explore-the-marketplace/programming.svg';
import img7 from '../assets/img/home-page/explore-the-marketplace/business.svg';
import img8 from '../assets/img/home-page/explore-the-marketplace/lifestyle.svg';
import img9 from '../assets/img/home-page/explore-the-marketplace/data.svg';


import { FcAssistant, FcFilmReel, FcOldTimeCamera, FcBullish, FcPrivacy, FcMusic, FcReading } from "react-icons/fc";
import { MarketPlaceService } from '../cmps/market-place-service';

export function ExploreMarketPlace() {

    const marketPlaceItems = [
        { title: "Graphics & Design", img: img1 },
        { title: "Digital Marketing", img: img2 },
        { title: "Writing & Translation", img: img3 },
        { title: "Video & Animation", img: img4 },
        { title: "Music & Audio", img: img5 },
        { title: "Programming & Tech", img: img6 },
        { title: "Business", img: img7 },
        { title: "Lifestyle", img: img8 },
        { title: "Data", img: img9 }
    ]

    return (
        <section>
            <ul className='explore-market-place clean-list'>
                {marketPlaceItems.map((item, idx) => {
                    return (
                        <Link key={idx} to={`/explore?filter=tags:${item.title}`}>
                            <MarketPlaceService title={item.title} img={item.img} />
                        </Link>
                    )
                })}
            </ul>
        </section>

    )

}