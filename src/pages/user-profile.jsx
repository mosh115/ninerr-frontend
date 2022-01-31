import React, { useEffect } from 'react';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { socketService } from '../services/socket.service';

import { uploadImg } from "../services/cloudinary.service"
import { updateUser } from '../store/user.actions';
// import { OrderTable } from '../cmps/order-table';
import { OrderCard } from '../cmps/order-card';
import { loadOrders, updateOrder, setOrderFilter } from '../store/order.actions';
import { loadGigs, setFilter } from "../store/gig.actions.js"



import cameralogo from '../assets/img/cameralogo.png';
import { showUserMsg } from '../services/event-bus.service';



function _UserProfile({ user, updateUser, loadGigs, setFilter, gigs, orders, orderFilter, loadOrders, updateOrder, setOrderFilter, }) {
    // console.log(user);
    let navigate = useNavigate();

    useEffect(() => {
        // socketService.on('testing', msg => console.log(msg))
        if (!user) {
            showUserMsg('Please Login')
            navigate('/');
        }
        const orderFilter = {
            sellerId: user._id
        }
        setOrderFilter(orderFilter)
        setFilter({ title: '', tags: [], userId: user._id })
        loadGigs()
        // loadOrders()
    }, [])

    useEffect(() => {
        loadOrders()
    }, [orderFilter])

    useEffect(() => {
        setFilter({ title: '', tags: [], userId: '' })
    }, [])

    console.log('orders', orders);
    // useEffect(() => {
    //     // loadOrders()
    // }, [orders])



    const formatDate = (value) => {
        let date = new Date(value);
        let mmm_yyyy = date.toUTCString().split(' ').splice(2, 2)
        return mmm_yyyy[0] + ' ' + mmm_yyyy[1];
    }

    const addPicture = async (ev) => {
        try {
            let imgUrl = await uploadImg(ev.target.files[0])
            console.log(imgUrl);
            user.imgUrl = imgUrl;
            console.log(user);
        }
        catch {
            console.log('failed to get imgUrl');
        }
        updateUser(user);
    }
    const areOrders = orders.length ? true : false;
    const areGigs = gigs.length ? true : false;
    const numOfOrders = orders.length;
    let totalPrice = 0
    orders.forEach(order => {
        totalPrice += +order.gig.price;
    });
    // if (!orders.length) 
    // if (orders[0].seller._id !== user._id) return <h1>Loading..</h1>
    return (
        <section className="profile-page-container flex">
            <div className="user-card flex column">
                {!user.imgUrl && <div className="user-avatar" style={{ backgroundColor: user.avatarColor }}>
                    <p>{user.username[0].toUpperCase()}</p>
                </div>
                }
                {
                    user.imgUrl && <div className="user-picture">
                        <img src={`${user.imgUrl}`} alt={<p>{user.username[0].toUpperCase()}</p>} />
                    </div>
                }
                <label className='add-picture flex'>
                    <img src={cameralogo} alt="Camera icon" />
                    <input onChange={addPicture} type="file" />
                </label>
                <h3 className="user-name">{user.username}</h3>
                <Link to="/profile/edit">
                    <svg className="edit-link" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.3628 2.30102L13.6796 0.618553C12.8553 -0.205791 11.521 -0.205916 10.6965 0.618522L0.778434 10.4718L0.0102775 15.1279C-0.0733163 15.6346 0.365528 16.0736 0.872371 15.99L5.52846 15.2218L15.3824 5.30374C16.2052 4.4809 16.2131 3.15127 15.3628 2.30102ZM6.26384 9.7364C6.39809 9.87065 6.57406 9.93774 6.75 9.93774C6.92593 9.93774 7.1019 9.87065 7.23615 9.7364L10.9558 6.01671L11.8486 6.90949L6.5625 12.2301V10.9377H5.0625V9.43774H3.77012L9.09072 4.15165L9.9835 5.04443L6.26381 8.76408C5.9954 9.03258 5.9954 9.4679 6.26384 9.7364ZM2.56662 14.3169L1.6834 13.4336L2.06278 11.1341L2.63778 10.5627H3.9375V12.0627H5.4375V13.3624L4.86618 13.9375L2.56662 14.3169ZM14.4099 4.33146L14.4083 4.33305L14.4067 4.33465L12.9058 5.8454L10.1548 3.09446L11.6656 1.59352L11.6672 1.59196L11.6687 1.5904C11.9546 1.30458 12.418 1.30105 12.7073 1.59037L14.3903 3.2733C14.699 3.58196 14.7009 4.04046 14.4099 4.33146Z"></path></svg>
                </Link>
                <ul>
                    <li className="line"></li>
                    <li className='flex space-between'>
                        <span>
                            <span className="user-details-icon">
                                <svg width="13" height="13" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M5.38338 15.6772C0.842813 9.09472 0 8.41916 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41916 11.1572 9.09472 6.61662 15.6772C6.31866 16.1076 5.68131 16.1076 5.38338 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z"></path></g><defs><clipPath id="clip0"><rect width="12" height="16"></rect></clipPath></defs></svg>
                                {' '}From
                            </span>
                        </span>
                        <p className='b'>{user.from || "United States"}</p>
                    </li>
                    <li className='flex space-between'>
                        <span>
                            <span className="user-details-icon">
                                <svg width="13" height="13" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8813 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8813 12.1187 9 9.8 9Z">
                                    </path>
                                </svg>
                            </span>
                            {' '}Member since
                        </span>
                        <p className='b'>{formatDate(user.createdAt)}</p>
                    </li>
                </ul>
            </div >

            <div className="user-gigs flex column">
                <div className='craet-gig flex space-between'>
                    {!areGigs &&
                        <p>
                            It seems that you don't have any active Gigs. Get selling!
                        </p>
                    }
                    {areGigs &&
                        <p>
                            Happy to have you here as a seller. Improve your income by offering more Gigs!
                        </p>
                    }
                    <Link to="/add"><button>Create a New Gig</button></Link>
                </div>

                {/* {!orders.length && <h1>No orders to show.</h1>} */}

                {areOrders &&
                    <React.Fragment>
                        <div className='orders-header'>Active Orders -
                            <span className='oreders-total'> {numOfOrders} (${totalPrice})</span>
                        </div> 
                        <div className='order-list'>
                            {orders.map((order, idx) => <OrderCard key={idx} updateOrder={updateOrder} order={order} />)}
                            {/* <OrderTable updateOrder={updateOrder} orders={orders} /> */}
                        </div>
                    </React.Fragment>
                }

            </div>
        </section >
    )
}

function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs,
        user: state.userModule.user,
        orders: state.orderModule.orders,
        order: state.orderModule.orderFilter
    }
}
const mapDispatchToProps = {
    updateUser,
    loadOrders,
    updateOrder,
    setOrderFilter,
    setFilter,
    loadGigs,
}

export const UserProfile = connect(
    mapStateToProps,
    mapDispatchToProps,
)(_UserProfile)
