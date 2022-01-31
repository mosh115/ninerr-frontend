import React from "react"
import { connect } from "react-redux"
import { NavLink, useLocation, useNavigate, Link } from "react-router-dom"
import { showSuccessMsg } from "../services/event-bus.service.js"
import { socketService } from "../services/socket.service.js"
// import { utilService } from '../services/util.service'

// import routes from "../routes"
import { FaSearch } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"
// this is for the nav bar to change bcg color when scrolling
import { useState, useEffect } from "react"

import { onLogin, onLogout, onSignup, removeUser } from "../store/user.actions.js"
import { LoginSignup } from "./login-signup.jsx"
import { PopoverNav } from "./popover-nav.jsx"
import { setFilter } from '../store/gig.actions'


function _AppHeader({ setFilter, onLogin, onSignup, onLogout, user }) {
  // let interval
  let navigate = useNavigate();


  const [isNotifaction, setIsNotifaction] = useState(false)
  const [isSignIn, toggleSignIn] = useState(false)
  const [isSignUp, toggleSignUp] = useState(false)
  const [isPopoverNav, togglePopoverNav] = useState(false)
  const [searchContent, setSearchContent] = useState('')

  useEffect(() => {
    socketService.on('order-added', (order) => {
      setIsNotifaction(!isNotifaction)
      // interval = setInterval(() => {

      // }, 1000)

      // setTimeout(() => setIsNotifaction(false), 5000)
      // showSuccessMsg('Order was added, check it out')
      // showSuccessMsg(`Order was added, check it out ${order._id}`)
    }, [])
  })

  //* gets the current page's path
  let currLocation = useLocation().pathname

  useEffect(() => {
    if (currLocation === '/profile' && isNotifaction) setIsNotifaction(false)

    // clearInterval(interval)
  }, [currLocation])

  useEffect(() => {
    if (isSignIn) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isSignIn])

  //* controls header beaviour - background color, sticky or scrolling, depends on the current page
  const [navbar, setNavbar] = useState(false)
  const [subNavbar, setSubNavbar] = useState(false)
  const [navsDisappear, setNavsDisappear] = useState(false)
 


  //* navbar scroll/route behaviour change 

  const changeHeaderBehaviour = () => {

    //* in homepage, when starting to scroll - will change background to white
    if (window.scrollY >= 20) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
    //* and when scrolling some more - the categories navbar will appear
    if (window.scrollY >= 250) {
      setSubNavbar(true)
    } else {
      setSubNavbar(false)
    }
    //* in pages except HomePage, both navbars appear with white background, 
    //* and the search bar shows.
    //* and both scroll with page after scrolling some distance
    if (window.scrollY >= 400 && currLocation !== '/') {
      setNavsDisappear(true)
    } else {
      setNavsDisappear(false)
    }
  }

  useEffect(() => {
    changeHeaderBehaviour()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeHeaderBehaviour, true)
    return () => {
      window.removeEventListener("scroll", changeHeaderBehaviour, true);
    }

  }, [currLocation])


  const handleChange = ({ target }) => {
    setSearchContent(target.value)

  }
  const onSearch = (ev) => {
    ev.preventDefault()
    navigate(`/explore?filter=title:${searchContent}`)
    setSearchContent('')

  }

  // useEffect(() => {
  //   if (isSignIn) document.body.style.overflow = 'hidden';
  //   else document.body.style.overflow = 'unset';
  // }, [isSignIn])
  
 
  return (
    <header className="app-header">
      <div className=
        {(currLocation === '/' && !navbar) ?
          "navbar nav-container flex align-center space-between" :
          (!navsDisappear ?
            "navbar white nav-container flex align-center space-between" :
            "navbar white nav-container flex align-center space-between no-sticky")
        } >
        <div className="hamburger">
          <HiMenu />
        </div>
        <div className="logo-and-search-box">
          <NavLink className="logo-font clean-link" to="/">
            Ninerr<span className="logo-point">.</span>
          </NavLink>
          <form className={subNavbar || currLocation !== '/' ?
            'navbar-search-box ' :
            'navbar-search-box hidden'}>
            <div className='search-box-icon'><i><FaSearch /></i> </div>
            <input onChange={handleChange} value={searchContent} type="search" name="search-box" placeholder="Find Services" />
            <button onClick={onSearch}>Search</button>
          </form>
        </div>


        {/* <nav className="side-bar flex align-center space-between"> */}
        <nav className="flex align-center space-between">
          <NavLink className="about clean-link" to="/about">
            About
          </NavLink>
          <NavLink className="explore clean-link" to="/explore">
            Explore
          </NavLink>
          {!user && <React.Fragment><div className=" sign-in pointer" onClick={() => { toggleSignIn(true) }}>
            Sign in
          </div>
            <div className="join pointer" onClick={() => { toggleSignIn(true); toggleSignUp(true) }}>
              Join
            </div>
          </React.Fragment>}
          {/* {user && <AvatarPicture user={user} size="32px" isGrey={false} onClick={() => { togglePopoverNav(true) }} className="pointer"/>} */}
          {user && <div className="avatar-container">
            {!user.imgUrl &&
              <div className="user-avatar pointer" onClick={() => { togglePopoverNav(true) }} style={{ backgroundColor: user.avatarColor }}>
                <p>{user.username[0].toUpperCase()}</p>
                {/* <div className="dot"></div> */}
              </div>}
            {user.imgUrl &&
              <div className="user-picture pointer" onClick={() => { togglePopoverNav(true) }}>
                <img src={`${user.imgUrl}`} alt={<p>{user.username[0].toUpperCase()}</p>} />
              </div>
            }
            <div className={isNotifaction ? "red-dot" : "dot"}></div>
            {/* {isNotifaction && <div className="red-dot"></div>} */}
          </div>}
        </nav>

      </div>
      <div className={!subNavbar && currLocation === '/' ?
        "sub-nav hidden" :
        (navsDisappear ? "sub-nav no-sticky" : "sub-nav")
      }>

        {['Website design', 'Wordpress', 'Logo design', 'Music', 'Voice Over', 'Translating'].map((tag, idx) =>
          <span key={idx}><Link to={`/explore?filter=tags:${tag}`}>{tag}</Link></span>
        )}
      </div>
      {isSignIn && !user && <LoginSignup toggleSignIn={toggleSignIn} toggleSignUp={toggleSignUp} isSignUp={isSignUp} onLogin={onLogin} onSignup={onSignup} />}
      {isPopoverNav && <PopoverNav togglePopoverNav={togglePopoverNav} onLogout={onLogout} />}


    </header>

  )
}

function mapStateToProps(state) {
  return {
    gig: state.gigModule.page,
    user: state.userModule.user,
    isLoading: state.systemModule.isLoading,
  }
}
const mapDispatchToProps = {

  onLogin,
  onSignup,
  onLogout,
  setFilter,
  removeUser,
}

export const AppHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AppHeader)
