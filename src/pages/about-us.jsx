import React from 'react'
import { NavLink} from "react-router-dom"
import { ScrollToTop } from '../cmps/scroll-to-top'
export function AboutUs() {

    return (
        <section className='about-us main-layout center'>
            <ScrollToTop/>
            <h2>About Us</h2>
            <div className='content'>
                <p>We are Ninerr.</p>
            <p>We are here to help you find the perfect freelance to do the jobs 
                that you do not know how to do, or that you simply don't like to do yourself</p>
            <p>Our main goal is to connect those who has the knowhow and the desire 
                to work and earn money for their time and dedication, while letting people 
                like you, run their business and deal with the important things.</p>
            <p>Ninerr is a unique platform that makes it a Win-Win situation.</p>
            <p>It is international, which means that your overseas freelance 'employees' 
                will work while you are asleep, it means that the job is being done for you</p>
            <p>So, dive in and start exploring and using this amazing opportunity</p>
            <p>OUr team consists of expert web developers that support the 24/7 fluent 
                activity of the site</p>
            <p>Our support team will be delighted to answer any question that arises. 
                We don't sleep, We don't eat, We are 100% dedicated for your success</p>
            <p>And pricing? Well.. this is the biggest surprise. Our service is free 
                for the first year, including all the support that you need, and after 
                the first year. We will pay the free lancers for you</p>
            </div>
            
            <h3>Could it be any better? Probably not ...</h3>
            <NavLink className="clean-link" to="/explore">
                <button>Start exploring </button>
          </NavLink>
            
        </section>
    )
}
