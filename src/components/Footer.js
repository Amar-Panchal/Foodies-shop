import React from 'react'
import {BsInstagram,BsLinkedin,BsGoogle,BsFacebook,BsTwitter} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
function Footer() {
    return (
        <>
        <footer>
        <div className=" container footer pt-5 pb-2">
            <div className="box ">
                <h3>About us</h3>
                <p>Lorem ipsum dolor sit amet consectetur,Lorem Ipsum is simply dummy text of the printing and typesetting industry.  adipisicing elit. Aliquam est placeat blanditiis.</p>
                <button className="btn-navyblue ">Read more</button>
            </div>
            <div className="box"> 
                <h3>Quick Links</h3>
                <NavLink className="nav-link navblue-color " to ="/">Home</NavLink>
                <NavLink className="nav-link navblue-color" to ="/menu">Menu</NavLink>
                <NavLink className="nav-link navblue-color " to ="/about">About</NavLink>
                <NavLink className="nav-link navblue-color " to ="/contact">Contact</NavLink>
                <NavLink className="nav-link navblue-color " to ="/cart">Cart</NavLink>
            </div>
            
            <div className=" box ">
                <h3>Contact Us</h3>
                <div className="contact-info">
                <div>
                    <div>
                        <img src="./icons/phone-2.svg" alt="" />
                        <div>
                            <span className="contactTitle">Call Us : </span>
                            <span>(+91) 123 456 789</span>
                        </div>
                    </div>
                    <div>
                        <img src="./icons/bag-2.svg" alt="" />
                        <div>
                            <span className="contactTitle">E-mail : </span>
                            <span>support@gamil.com</span>
                        </div>
                    </div>
                    <div>
                        <img src="./icons/clock-2.svg" alt=""/>
                        <div>
                            <span className="contactTitle">Working Hours : </span>
                            <span>Mon - Sat (8.00am - 12.00am</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="socialAccount pt-2 justify-content-center align-items-center d-flex">
            <span>< BsInstagram /></span>
            <span><BsLinkedin /></span>
            <span><BsGoogle /></span>
            <span><BsFacebook /></span>
            <span><BsTwitter /></span>
        </div>

    </footer>
        <footer className="copyright">
            <div>
                Copyright © 2021 All rights reserved  by <a href="#">  Amar Panchal</a> 
            </div>
        </footer>
            

        </>
    )
}

export default Footer;
