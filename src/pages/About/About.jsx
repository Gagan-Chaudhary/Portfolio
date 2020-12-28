import React from 'react'
import gagan from '../../assets/image/dp2.jpeg'
import './about.css'

export default function About() {
    return (
        <>
        <div className="about-main display-flex">
            <div className="about">
                <h1>Hey, I'm Gagan.</h1>
                <h3>I'm a Web developer, currently studying in IIIT Vadodara.</h3>
                <button>My skills</button>
            </div>
            <div className="about-image">
                <img src={gagan} alt="Gagan Chaudhary Image" srcset=""/>
            </div>

        </div>
        </>
    )
}
