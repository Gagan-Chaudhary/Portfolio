import React from 'react'
import './certification.css'
import characters from './certificate-details'

export default function Certifications() {
    return (
       <>
       <div className="certification">
         
       <h1 className="certificate-text">Certifications</h1>
       <CardList />
       </div>
       </>
    )
}




const CardListItem = props => {
  return (
    
      <div
        className="main-card">
        <p>
          {/* <img src={x} alt="Image" /> */}
          
        </p>
        <div className="certificate-image">
          <img src={props.character.Image} alt="Certificate" srcset=""/>
        </div>
        <p><strong>{props.character.name}</strong></p>
        
        <p>{props.character.alignment}</p>
        <div>
        <a href={props.character.fb} class="fa fa-facebook" target="_blank"></a>
            
        </div>
      </div>
    
  );
};

const CardList = () => {
  return (
    <div className="main-container">
      {characters.map(character => {
        return <CardListItem character={character} key={character.id} />;
      })}
    </div>
      );
};

