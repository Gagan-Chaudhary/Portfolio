// import React from 'react'
import './contact.css'

// Updated imports for MUI v6 icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';

// Updated colors import for MUI v6
import { grey } from '@mui/material/colors';

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
