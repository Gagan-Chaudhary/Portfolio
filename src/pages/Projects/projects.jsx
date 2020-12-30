import React from 'react'
import projects from './project-details'
import './project.css'


export default function Projects() {
    return (
        <>
        <div id="projects" className="project-main">
            <h1>Projects</h1>
            <div className="projects-div">
               
                
                    {projects.map((project, index) => (
                            <div className="project-box" key={index}>
                            <div className="project-image">
                            <img src={project.image} alt={project.imgAltText} rounded className="image-style m-1"/>
                            </div>
                            <div className="project-details">
                            <h3>{project.name}</h3>
                           <ul>
                               <li><img src={project.img1} alt="" srcset=""/><span className="tech">{project.tech1}</span></li>
                               <li><img src={project.img2} alt="" srcset=""/><span className="tech">{project.tech2}</span></li>
                               <li><img src={project.img3} alt="" srcset=""/><span className="tech">{project.tech3}</span></li>
                               <li><img src={project.img4} alt="" srcset=""/><span className="tech">{project.tech4}</span></li>
                               <li><img src={project.img5} alt="" srcset=""/><span className="tech">{project.tech5}</span></li>
                           </ul>
                           <h5>{project.details}</h5>
                           <button>View code</button>
                            </div>
                                
                            </div>
                        ))}
                  
        
            </div>
        </div>
        </>
    )
}
