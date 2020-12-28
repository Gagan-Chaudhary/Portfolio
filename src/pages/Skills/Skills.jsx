import React from 'react'
import './skills.css'
import { skills } from "./skillsdata";
// import characters from './skillsdata'
// import skill from './skillsdata.jsx/skills'
// impoer './'





export default function Skills() {
  return (
    <div className="skills-main">
        <h1>Skills</h1>
        <div className="skills-div">
       <div className="frontend skill-card">
         <h2>Frontend</h2>
         <hr/>
         <div className="flex-skill">
         {skills.frontend.map((skill, index) => (
                    <span className="skill-name" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/> {skill.skillName}
                      </a>
                    </span>
                  ))}
         </div>
         
       </div>
       <div className="backend skill-card">
         <h2>Backend</h2><hr/>
         <div className="flex-skill">
         {skills.backend.map((skill, index) => (
                    <span className="skill-name" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/> {skill.skillName}
                      </a>
                    </span>
                  ))}
         </div>
       </div>
       <div className="languages skill-card">
       <h2>Languages</h2><hr/>
       <div className="flex-skill">
       
         {skills.programmingLanguages.map((skill, index) => (
                    <span className="skill-name" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/> {skill.skillName}
                      </a>
                    </span>
                  ))}
         </div>
       </div>
       <div className="hosting-platform skill-card">
       <h2>Hosting Platforms</h2><hr/>
       <div className="flex-skill">
       
         {skills.hostingPlatforms.map((skill, index) => (
                    <span className="skill-name" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/> {skill.skillName}
                      </a>
                    </span>
                  ))}
         </div>
       </div>
       <div className="database skill-card">
       <h2>Databses</h2><hr/>
       <div className="flex-skill">
       
         {skills.databases.map((skill, index) => (
                    <span className="skill-name" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/> {skill.skillName}
                      </a>
                    </span>
                  ))}
         </div>
       </div>
       <div className="version-control skill-card">
       <h2>Version Control</h2><hr/>
       <div className="flex-skill">
       
         {skills.versionControl.map((skill, index) => (
                    <span className="skill-name" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/> {skill.skillName}
                      </a>
                    </span>
                  ))}
         </div>
       </div>
       {/* <div className="tools skill-card"></div> */}
        </div>
      
    </div>
  );
}



