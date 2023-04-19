import React from 'react';
import Card from "../UI/Card";
import './SimpsonItem.css'

const SimpsonItem = ({name,surname,age,description,img}) => {


    return (
        <Card className="container">
            <div className="description">
                <h1>{surname} {name}</h1>
                <h2>age: {age}</h2>
                <p>{description}</p>
            </div>
               <div className='photo'>
                   <img src={img} alt="family members"/>
               </div>
        </Card>
    );
};

export default SimpsonItem;