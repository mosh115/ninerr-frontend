import React from 'react';
import { Link } from "react-router-dom"

import Wordpress from '../assets/img/home-page/popular-professional-services/wordpress.jpg';
import VoiceOver from '../assets/img/home-page/popular-professional-services/voice-over.jpg';
import VideoExplainer from '../assets/img/home-page/popular-professional-services/video-explainer.jpg';
import LogoDesign from '../assets/img/home-page/popular-professional-services/logo-design.jpg';
import SocialMedia from '../assets/img/home-page/popular-professional-services/social-media.jpg';

import { PopularServiceCard } from './popular-service-card';

export function PopularServiceList() {

    const popularServices = [
        { img: Wordpress, title: 'Wordpress', subTitle: 'Customize your site' },
        { img: VoiceOver, title: 'Voice Over', subTitle: 'Share your message' },
        { img: VideoExplainer, title: 'Video Explainer', subTitle: 'Engage your audience' },
        { img: LogoDesign, title: 'Logo Design', subTitle: 'Build your brand' },
        { img: SocialMedia, title: 'Social Media', subTitle: 'Reach more costumers' }

    ]

    return (
        <section>

            <ul className='popular-service-list clean-list'>
                {popularServices.map((service, idx) => {
                    return (
                        <Link key={idx} to={`/explore?filter=tags:${service.title}`}>
                            <PopularServiceCard popularService={service} />
                        </Link>
                    )
                }
                )}
            </ul>
        </section>

    )

}