// import { useState, useEffect } from 'react'
// import { userService } from '../services/user.service'
import { Link, useNavigate } from "react-router-dom"





export function PopoverNav(props) {
    // console.log(props);
    let navigate = useNavigate();

    const stopPropagation = (ev) => {
        ev.stopPropagation()
    }

    const onLogout = () => {
        props.onLogout();

        navigate('/');

    }
    const onClosePopNav = () => {
        props.togglePopoverNav();
    }

    return (
        <div className="transparent-bacground" onClick={() => { props.togglePopoverNav(false) }}>
            <ul className="popover-nav" onClick={stopPropagation}>
                <div className="triangle2"></div>
                <div className="triangle1"></div>
                <Link to={`/profile`}><li onClick={onClosePopNav} className="pointer">Profile</li></Link>
                <li className="line"></li>
                <li onClick={() => { onLogout(); onClosePopNav() }} className="pointer">Logout</li>
            </ul>
        </div>
    )
}
