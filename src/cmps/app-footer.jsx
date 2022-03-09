import React from "react"
import { NavLink } from "react-router-dom"
import { UserMsg } from './user-msg.jsx'
import { FaPinterest, FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"



export function AppFooter() {

  return (
    <section className="app-footer main-container full">
      <footer className="footer">

        <div className="footer-links ">
          <NavLink className="clean-link footer-link" to="/explore">
            <div>Categories</div></NavLink>
          <NavLink className="clean-link footer-link" to="/about">
            <div>about</div></NavLink>
          <NavLink className="clean-link footer-link" to="/contact">
            <div>contact</div></NavLink>
          <NavLink className="clean-link footer-link" to="/privacy">
            <div>Privacy Policy</div></NavLink>
          <NavLink className="clean-link footer-link" to="/terms">
            <div>Terms of use</div></NavLink>
        </div>


        <div className="copyrights-and-social-nav">
          <div className="logo-and-brand">
            <NavLink className="clean-link" to="/">
              <span className="logo-font"> Ninerr. </span>
            </NavLink>
            <span className="copyright">© Ninerr International Ltd. 2022</span>
          </div>
          <ul className="clean-list social-nav">
            <li className="icon-wrap">
              <a href="https://twitter.com"
                target="_blank"
                aria-label="twitter"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="icon-wrap">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="icon-wrap">
              <a
                href="https://linkedin.com"
                target="_blank"
                aria-label="linkedin"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="icon-wrap">
              <a
                href="https://pinterst.com"
                target="_blank"
                aria-label="pinterst"
                rel="noreferrer"
              >
                <FaPinterest />
              </a>
            </li>
            <li className="icon-wrap">
              <a
                href="https://instagram.com"
                target="_blank"
                aria-label="instagram"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>

        <UserMsg />
      </footer>
    </section>
  )
}


