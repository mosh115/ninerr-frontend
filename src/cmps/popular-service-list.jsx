import React from 'react';
import { Link } from "react-router-dom"

import Wordpress from '../assets/img/home-page/popular-professional-services/wordpress.jpg';
import VoiceOver from '../assets/img/home-page/popular-professional-services/voice-over.jpg';
import VideoExplainer from '../assets/img/home-page/popular-professional-services/video-explainer.jpg';
import LogoDesign from '../assets/img/home-page/popular-professional-services/logo-design.jpg';
import SocialMedia from '../assets/img/home-page/popular-professional-services/social-media.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { PopularServiceCard } from './popular-service-card';

export function PopularServiceList() {
    const responsive = {
        wide: {
            breakpoint: { max: 3000, min: 1560 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1560, min: 900 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 900, min: 600 },
            items: 3,
            slidesToSlide: 3
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const popularServices = [
        { img: Wordpress, title: 'Wordpress', subTitle: 'Customize your site' },
        { img: VoiceOver, title: 'Voice Over', subTitle: 'Share your message' },
        { img: VideoExplainer, title: 'Video Explainer', subTitle: 'Engage your audience' },
        { img: LogoDesign, title: 'Logo Design', subTitle: 'Build your brand' },
        { img: SocialMedia, title: 'Social Media', subTitle: 'Reach more costumers' }
    ]

    return (
        <section className='popular-service-list'>
            <Carousel
                responsive={responsive}
                draggable={false}
                infinite={true}
                keyBoardControl={false}
                focusOnSelect={true}
                shouldResetAutoplay={false}

                removeArrowOnDeviceType={["wide"]}
            >
                {popularServices.map(service => {
                    return (
                        <Link key={service.title} to={`/explore?filter=tags:${service.title}`}>
                            <PopularServiceCard popularService={service} />
                        </Link>
                    )
                }
                )}
            </Carousel>

            {/* <ul className='popular-service-list clean-list'>
                {popularServices.map((service, idx) => {
                    return (
                        <Link key={idx} to={`/explore?filter=tags:${service.title}`}>
                            <PopularServiceCard popularService={service} />
                        </Link>
                    )
                }
                )}
            </ul> */}
        </section>
    )
}