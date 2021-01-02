import React from 'react'
import gagan from '../../assets/image/dp2.jpeg'
import particlejsBubble from '../../config/particlesjs-config-bubble'
import particlejsSnow from '../../config/particlesjs-config-snow'
import Particles from 'react-particles-js';
import './about.css'
import particlesConfig from '../../config/particlesjs-config';

export default function About() {
    return (
        <>
    
        <div id="home" className="about-main" >
     
      {/* <marquee scrollamount="10">🚧 Under construction 🚧</marquee> */}
            
            <div className="display-flex flexx">
            <div className="about">
                <div className="heyy-text"><h1>Hey <span className="wave">👋</span>, I'm <span>Gagan</span>.</h1></div>
               <div className="about-text">
               <h3>I'm a <br/><h3 className="change"></h3>,<br/> currently studying <br/> in <a href="http://iiitvadodara.ac.in/" target="_blank">  IIIT Vadodara</a>.</h3>
               </div>
                <button><a href="#skills">My skills</a></button>
            </div>
            <div className="about-image">
                <img src={gagan} alt="Gagan Chaudhary Image" srcset=""/>
            </div>
            </div>

        </div>
        </>
    )
}
