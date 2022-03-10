import React from 'react';



export function PopularServiceCard(props) {
    const { popularService } = props
    const { img, title, subTitle } = popularService

    return (
        <article className='popular-service-card'>
            <img src={img} alt={title} />
            <h5>{subTitle}</h5>
            <h3>{title}</h3>
            <div className='shadow'></div>
        </article>
    )
}

