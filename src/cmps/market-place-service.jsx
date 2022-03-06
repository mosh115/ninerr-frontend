import React from 'react';



export function MarketPlaceService({ title, img }) {


    return (
        <article >
            <li className='market-place-service'>
                <i><img src={img} alt="img_services" /></i>
                <hr />
                <h3>{title}</h3>
            </li>

        </article>
    )
}