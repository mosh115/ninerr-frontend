import React, { useState } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { UserMsg } from './user-msg.jsx'
import {
  FaPinterest,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"
import { socketService } from "../services/socket.service.js"
// import { UserMsg } from "./user-msg.jsx"

function _AppFooter() {
  // socketService.emit('chat newMsg', 'test test test')
  socketService.emit('test', 'hi from socket front')

  return (
    <footer className="app-footer  main-layout">
      {/* <button onClick={() => {
        
      }}>socket</button> */}
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
        <div>
          <NavLink className="clean-link" to="/">
            <span className="logo-font"> Ninerr. </span>
          </NavLink>
          <span className="copyright">© Ninerr International Ltd. 2022</span>
        </div>
        <ul className="clean-list social-nav">
          <li className="icon-wrap">
            <a href="https://twitter.com" target="_blank" aria-label="twitter">
              <FaTwitter />
            </a>
          </li>
          <li className="icon-wrap">
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="facebook"
            >
              <FaFacebook />
            </a>
          </li>
          <li className="icon-wrap">
            <a
              href="https://linkedin.com"
              target="_blank"
              aria-label="linikedin"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="icon-wrap">
            <a
              href="https://pinterst.com"
              target="_blank"
              aria-label="pinterst"
            >
              <FaPinterest />
            </a>
          </li>
          <li className="icon-wrap">
            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="instagram"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>

      <UserMsg />
    </footer>
  )
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = {}

export const AppFooter = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AppFooter)
