import React from "react";
import { Link } from "react-router-dom"

import Wordpress from '../assets/img/home-page/popular-professional-services/wordpress.jpg';
import VoiceOver from '../assets/img/home-page/popular-professional-services/voice-over.jpg';
import VideoExplainer from '../assets/img/home-page/popular-professional-services/video-explainer.jpg';
import LogoDesign from '../assets/img/home-page/popular-professional-services/logo-design.jpg';
import SocialMedia from '../assets/img/home-page/popular-professional-services/social-media.jpg';


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useWindowSize } from '../hooks/useWindowSize';

import { PopularServiceCard } from './popular-service-card';

export function PopularServiceList() {

    const size = useWindowSize();


    const popularServices = [
        { img: Wordpress, title: 'Wordpress', subTitle: 'Customize your site' },
        { img: VoiceOver, title: 'Voice Over', subTitle: 'Share your message' },
        { img: VideoExplainer, title: 'Video Explainer', subTitle: 'Engage your audience' },
        { img: LogoDesign, title: 'Logo Design', subTitle: 'Build your brand' },
        { img: SocialMedia, title: 'Social Media', subTitle: 'Reach more costumers' }
    ]

    const visibleSlides = () => {
        if (size.width > 1250) return 5;
        else if (size.width > 1050) return 4;
        else if (size.width > 800) return 3;
        else if (size.width > 500) return 2;
        else return 1;

    }

    return (
        <section className='popular-service-list'>
            <CarouselProvider
                naturalSlideWidth={13}
                naturalSlideHeight={16}
                totalSlides={popularServices.length}
                dragEnabled={false}
                visibleSlides={visibleSlides()}
                step={1}
                infinite={true}
            >
                <Slider className="slider" >
                    {popularServices.map((service, idx) => {
                        return (
                            <Slide className='slide' index={idx} key={service.title}>
                                <Link to={`/explore?filter=tags:${service.title}`}>
                                    <PopularServiceCard popularService={service} />
                                </Link>
                            </Slide>
                        )
                    })}
                </Slider>
                <ButtonBack className="btn-nav left"></ButtonBack>
                <ButtonNext className="btn-nav right"></ButtonNext>
            </CarouselProvider>
        </section>
    )
}