import React from 'react'
import './contact.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import { GitHub } from '@material-ui/icons';
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
                
                <button>Get in Touch</button>
                </div>
            </div>
            <div className="social-media">
                <ul>
                    {/* <LinkedInIcon/> */}
                    <li><span><LinkedInIcon fontSize="large" color="primary"/></span><a href="#">LinkedIn</a></li>
                    <li><span><MailIcon fontSize="large" color="secondary"/></span><a href="#">Gmail</a></li>
                    <li><span><GitHubIcon fontSize="large" color="black"/></span><a href="#">Github</a></li>
                    <li><span><InstagramIcon fontSize="large" color="secondary"/></span><a href="#">Instagram</a></li>
                  
                    
                </ul>
            </div>
        </div>
        
        </div>
        </>
    )
}
