import React from 'react';
import Card from "../UI/Card";
import '../SimpsonFamilly/SimpsonItem.css'

const SimpsonCharacterItem = (props) => {

    // властивості id,name,status,species,gender,image)

    return (
        <Card className="containerCharacter">
            <div className="description">
                <h1><i>Name:</i> {props.name}</h1>
                <h1><i>Status:</i> {props.status}</h1>
                <div className='title'><i>Species:</i> {props.species}</div>
                <div className='title'><i>Gender:</i> {props.gender}</div>
            </div>
               <div className='photo'>
                   <img src={props.img} alt="family members"/>
               </div>
        </Card>
    );
};

export default SimpsonCharacterItem;