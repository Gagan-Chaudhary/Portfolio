import React from 'react'
import projects from './project-details'
import './project.css'


export default function Projects() {
    return (
        <>
        <div className="project-main">
            <h1>Projects</h1>
            <div className="projects-div">
               
                
                    {projects.map((skill, index) => (
                            <div className="project-box" key={index}>
                            <div className="project-image">
                            <img src={skill.image} alt={skill.imgAltText} rounded className="image-style m-1"/>
                            </div>
                            <div className="project-details">
                            {skill.name}
                           
                           <h6>{skill.details}</h6>
                           <button>View code</button>
                            </div>
                                
                            </div>
                        ))}
                  
        
            </div>
        </div>
        </>
    )
}
