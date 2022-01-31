import React, { useEffect, useState } from 'react';
import { AvatarPicture } from './user-avatar-picture';


export function OrderCard({ order, updateOrder }) {
    // const [sortedOrders, setSortedOrders] = useState(orders)
    // useEffect(() => {
    //     setSortedOrders(sortOrders())
    // }, [orders])

    // function sortOrders() {
    //     console.log(orders);
    //     const sorted = orders.sort((a, b) => {
    //         return b.createdAt - a.createdAt;
    //     });
    //     console.log(sorted);
    //     return sorted
    // }

    function orderDateTime(createdAt) {
        const now = new Date();
        const orderTime = new Date(createdAt);
        let isTody = false;
        let isYear = now.getFullYear() === orderTime.getFullYear() ? true : false;
        if (now.getDate() === orderTime.getDate() && now.getMonth() === orderTime.getMonth()) {
            isTody = true;
        }
        if (isTody && isYear) {
            const time = orderTime.toLocaleTimeString();
            const idxSecondColon = time.indexOf(':', 3)
            return time.slice(0, idxSecondColon)
        } else return orderTime.toLocaleDateString();
    }

    function onUpdateOrder(ev, action) {
        // const order = orders.find(order => order._id === ev.target.dataset.id)
        order.status = action
        // console.log(order);
        console.log(action);
        updateOrder(order)
    }

    const isPending = (order.status === 'pending') ? true : false;
    // console.log(isPending);
    return (
        <div className="order-card">
            <div className='flex'>
                <img src={order.gig.imgUrls[0]} alt="" />
                <div className="buyer-picture-name flex">
                    <AvatarPicture user={order.buyer} size={'32px'} />
                    <p>{order.buyer.username}</p>
                </div>
            </div>
            <div className='flex'>
                <div className="created-at flex column">
                    <p>Date</p>
                    <h4>{orderDateTime(order.createdAt)}</h4>
                </div>
                <div className="price flex column">
                    <p>Price</p>
                    <h4>${order.gig.price}</h4>
                </div>
                <div className="status flex column">
                    <p>Status</p>
                    <h4>{order.status}</h4>
                </div>
            </div>
            <div className='flex actions'>
            {isPending && <div>
                <button data-id={order._id} className='btn-accept' onClick={(e) => onUpdateOrder(e, 'In Progress')}>Accept</button>
                <button data-id={order._id} className='btn-decline' onClick={(e) => onUpdateOrder(e, 'Declined')}>Decline</button>
            </div>}
            {!isPending && <div>
                <button className='btn-accept'>Deliver</button>
            </div>}
            </div>
        </div>
    )
}