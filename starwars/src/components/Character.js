import React from "react";
import './StarWars.css';

function Character(props) {
   return (
   <div className="character-card">
      <div className="character-info">
          <h3 className="name">{props.character.name}</h3>
          <p>
          <strong>Homeworld:</strong> {props.character.homeworld}
        </p>
        <p>
          <strong>Birth Year:</strong>
          {props.character.birth_year}
        </p>
        <p>
          <strong>Species:</strong>
          {props.character.species}
        </p>      
        
      </div>
    </div>
   )
}

export default Character;