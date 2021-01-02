import React from 'react'
import './contact.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';

import grey from '@material-ui/core/colors/grey';
const second = grey[50];

export default function Contact() {
    return (
        <>
        <div id="contact" className="contact-main">
        <div className="flex">
            <div className="work">
                <h2>Let's Work Together</h2>
                <p>Have a project you'd like to discuss?</p>
                <div>
                
                <button><a href="mailto:gaganveermaan@gmail.com">Get in Touch</a></button>
                </div>
            </div>
            <div className="social-media">
                <ul>
                    <li><div className="icon-align"><LinkedInIcon fontSize="large" color="primary"/><a href="https://www.linkedin.com/in/thegaganchaudhary/" target="_blank">LinkedIn</a></div></li>
                    <li><div className="icon-align"><TwitterIcon fontSize="large" color="primary"/><a href="https://twitter.com/chaudharyGagan9" target="_blank">Twitter</a></div></li>
                    <li><div className="icon-align"><GitHubIcon fontSize="large" color="black"/><a href="https://github.com/Gagan-Chaudhary" target="_blank">Github</a></div></li>
                    <li><div className="icon-align"><InstagramIcon fontSize="large" color="secondary"/><a href="https://www.instagram.com/da__hunk/" target="_blank">Instagram</a></div></li>
                 
                    
                </ul>
            </div>
        </div>
        
        </div>
        </>
    )
}
