import React from 'react'
// import Particles from 'react-particles-js';
// import particlesConfig from '../../config/particlesjs-config';
// import particlejsBubble from '../../config/particlesjs-config-bubble';
// import particlejsSnow from '../../config/particlesjs-config-snow';
import './skills.css'
import { skills } from "./skillsdata";

export default function Skills() {
  return (
    <>
    
    <div id="skills" className="skills-main" > 
     
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
       <h2>Databases</h2><hr/>
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
       <div className="tools skill-card">
       <h2>Tools & Technologies</h2><hr/>
       <div className="flex-skill">
       
         {skills.tools.map((skill, index) => (
                    <span className="skill-name" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/> {skill.skillName}
                      </a>
                    </span>
                  ))}
         </div>
       </div>
        </div>
      
    </div>
    
   
    </>
  );
}



