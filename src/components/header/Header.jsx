import React from 'react'
import './header.css'
export default function Header() {
    return (
        <>
        <div className="header-main display-flex">
        <div className="icon">
            <h1>Gagan Chaudhary</h1>
        </div>
        <div >
        <ul className="display-flex nav-ul">
            <li className="nav-li">Home</li>
            <li className="nav-li">About</li>
            <li className="nav-li">Skills</li>
            <li className="nav-li">Contact</li>
        </ul>
        </div>
        </div>
        </>
    )
}
