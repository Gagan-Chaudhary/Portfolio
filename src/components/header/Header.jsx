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
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
        <ul className="display-flex nav-ul">
            <li className="nav-li"><a href="#home">Home</a></li>
            <li className="nav-li"><a href="#skills">Skills</a></li>
            <li className="nav-li"><a href="#projects">Projects</a></li>
            <li className="nav-li"><a href="#contact">Contact</a></li>
        </ul>
        </div>
        </div>
        </>
    )
}
