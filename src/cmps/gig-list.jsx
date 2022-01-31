import React from 'react';

import { GigPreview } from './gig-preview';

export function GigList({ gigs }) {
    // console.log('gigs from list', gigs);
    return (
        <section className='gig-list card-grid'>
            {gigs.map(gig => <GigPreview gig={gig} key={gig._id} />)}
        </section>
    )

}
