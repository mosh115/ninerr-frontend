import { Link, useNavigate } from "react-router-dom"


export function PopoverNav({ onLogout, togglePopoverNav }) {

    let navigate = useNavigate();

    const stopPropagation = (ev) => {
        ev.stopPropagation()
    }

    const logout = () => {
        onLogout();
        navigate('/');

    }
    const onClosePopNav = () => {
        togglePopoverNav();
    }

    return (
        <div className="transparent-bacground" onClick={() => { togglePopoverNav(false) }}>
            <ul className="popover-nav" onClick={stopPropagation}>
                <div className="triangle2"></div>
                <div className="triangle1"></div>
                <Link to={`/profile`}><li onClick={onClosePopNav} className="pointer">Profile</li></Link>
                <li className="line"></li>
                <li onClick={() => { logout(); onClosePopNav() }} className="pointer">Logout</li>
            </ul>
        </div>
    )
}
