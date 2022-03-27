import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { NavLink, useLocation, useNavigate, Link } from "react-router-dom"
import { socketService } from "../services/socket.service.js"
import { FaSearch } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"

import { onLogin, onLogout, onSignup, removeUser } from "../store/user.actions.js"
import { setFilter } from '../store/gig.actions'

import { LoginSignup } from "./login-signup.jsx"
import { PopoverNav } from "./popover-nav.jsx"


function _AppHeader({ onLogin, onSignup, onLogout, user }) {


  let navigate = useNavigate();


  const [isNotifaction, setIsNotifaction] = useState(false)
  const [isSignIn, toggleSignIn] = useState(false)
  const [isSignUp, toggleSignUp] = useState(false)
  const [isPopoverNav, togglePopoverNav] = useState(false)
  const [searchContent, setSearchContent] = useState('')



  useEffect(() => {
    socketService.on('order-added', (order) => {
      console.log('newOrder');
    }, [])
  })


  //* gets the current page's path
  let currLocation = useLocation().pathname

  useEffect(() => {
    if (currLocation === '/profile' && isNotifaction) setIsNotifaction(false)
  }, [currLocation])

  useEffect(() => {
    if (isSignIn) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
  }, [isSignIn])


  //* controls header beaviour - background color, sticky or scrolling, depends on the current page
  const [navbarWhite, setNavbarWhite] = useState(false)
  const [subNavbarShow, setSubNavbarShow] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  // const [isHeaderFixed, setIsHeaderFixed] = useState(false)



  useEffect(() => {
    changeHeaderBehavior()
    // adding the event when a page loads or changes
    window.addEventListener('scroll', changeHeaderBehavior, true)
    return () => {
      window.removeEventListener('scroll', changeHeaderBehavior, true);
    }
  }, [])

  //* navbar scroll/route behavior change 
  const changeHeaderBehavior = () => {

    //* in homepage, when starting to scroll - will change background to white
    if (window.scrollY >= 20) {
      setNavbarWhite(true)
    }
    else {
      setNavbarWhite(false)
    }

    //* when scrolling more, subNavbar shows
    if (window.scrollY >= 200) {
      setSubNavbarShow(true)
    } else {
      setSubNavbarShow(false)
    }

    //* except HomePage, both navbars show with white background, 
    //* and scrolls up with the page
    // if (window.scrollY >= 400 && currLocation !== '/') {
    //   setIsHeaderFixed(true)
    // } else {
    //   setIsHeaderFixed(false)
    // }
  }

  const handleChange = ({ target }) => {
    setSearchContent(target.value)

  }

  const onSearch = (ev) => {
    ev.preventDefault()
    navigate(`/explore?filter=title:${searchContent}`)
    setSearchContent('')

  }

  const navBarClassName = () => {
    if (currLocation === "/" && !navbarWhite) return 'nav-container home-transparent'
    else if (currLocation === "/" && navbarWhite) return 'nav-container home-white'
    else if (currLocation !== "/") return 'nav-container'

  }
  const headerClassName = () => {
    if (currLocation === "/" && !navbarWhite) return 'app-header main-container home-transparent'
    else if (currLocation === "/" && navbarWhite) return 'app-header main-container home-white'
    else if (currLocation !== "/") return 'app-header main-container'

  }
  const subNavClassName = () => {
    if (currLocation === "/" && !subNavbarShow) return 'sub-nav-container full main-container home-up'
    else if (currLocation === "/" && subNavbarShow) return 'sub-nav-container full main-container home-scroll'
    else if (currLocation !== "/") return 'sub-nav-container full main-container'
  }

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen)
  }




  return (
    // <header className="app-header main-container">
    <header className={headerClassName()}>
      <div className={navBarClassName()} >
        <div className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)} > <HiMenu /></div>
        <div className="logo-and-search-box">
          <NavLink className="logo-font clean-link" to="/">
            Ninerr<span className="logo-point">.</span>
          </NavLink>
          <form className={subNavbarShow || currLocation !== '/' ?
            "navbar-search-box" :
            "navbar-search-box hidden"}>
            <div className="search-box-icon"><i><FaSearch /></i> </div>
            <input onChange={handleChange} value={searchContent} type="search" name="search-box" placeholder="Find Services" />
            <button onClick={onSearch}>Search</button>
          </form>
        </div>
        <div className="join-mobile pointer" onClick={() => { toggleSignIn(true); toggleSignUp(true) }}>
          Join
        </div>

        {/* <nav className="nav flex align-center space-between"> */}
        <nav className={isNavOpen ? 'nav menu-open' : 'nav'}>
          <NavLink onClick={() => toggleMenu()} className="about clean-link" to="/about">
            About
          </NavLink>
          <NavLink onClick={() => toggleMenu()} className="explore clean-link" to="/explore">
            Explore
          </NavLink>
          {!user && <><div className="sign-in pointer" onClick={() => { toggleSignIn(true) }}>
            Sign in
          </div>
            <div className="join pointer" onClick={() => { toggleSignIn(true); toggleSignUp(true) }}>
              Join
            </div>
          </>}

          {user && <div className="avatar-container">
            {!user.imgUrl &&
              <div className="user-avatar pointer" onClick={() => { togglePopoverNav(true) }} style={{ backgroundColor: user.avatarColor }}>
                <p>{user.username[0].toUpperCase()}</p>

              </div>}
            {user.imgUrl &&
              <div className="user-picture pointer" onClick={() => { togglePopoverNav(true) }}>
                <img src={`${user.imgUrl}`} alt={<p>{user.username[0].toUpperCase()}</p>} />
              </div>
            }
          </div>}
        </nav>
      </div>

      <section className={subNavClassName()}>
        <div className='sub-nav'>
          {['Website design', 'Wordpress', 'Logo design', 'Music', 'Voice Over', 'Translating'].map((tag, idx) =>
            <span key={idx}><Link to={`/explore?filter=tags:${tag}`}>{tag}</Link></span>
          )}
        </div>
      </section>
      {isSignIn && !user && <LoginSignup toggleSignIn={toggleSignIn} toggleSignUp={toggleSignUp} isSignUp={isSignUp} onLogin={onLogin} onSignup={onSignup} />}
      {isPopoverNav && <PopoverNav togglePopoverNav={togglePopoverNav} onLogout={onLogout} toggleSignIn={toggleSignIn} />}

      <div onClick={() => setIsNavOpen(!isNavOpen)} className={isNavOpen ? 'black-screen open' : 'black-screen'} ></div>
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
