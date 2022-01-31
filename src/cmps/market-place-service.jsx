import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';


export function MarketPlaceService({ title, img }) {


    return (
        <article >
            <li className='market-place-service'>
                <i><img src={img} /></i>
                <hr />
                <h3>{title}</h3>
            </li>

        </article>
    )
}