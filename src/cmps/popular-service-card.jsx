import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export function PopularServiceCard(props) {
    const { popularService } = props
    const { img, title, subTitle } = popularService

    return (
        <article >
            <li className='popular-service-card'>
                <img src={img} alt={title} />
                <h5>{subTitle}</h5>
                <h3>{title}</h3>
                <div className='shadow'></div>
            </li>

        </article>
    )
}

