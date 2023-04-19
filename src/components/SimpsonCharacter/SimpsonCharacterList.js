import React from 'react';
import SimpsonCharacterItem from "./SimpsonCharacterItem";
import "../SimpsonFamilly/SimpsonItem.css";

// властивості id,name,status,species,gender,image)
const SimpsonCharacterList = ({arrayCharacter}) => {


    return (
        <div className='wraper'>
            {arrayCharacter.map((item) => (
                <SimpsonCharacterItem
                    key={item.id}
                    name={item.name}
                    status={item.status}
                    species={item.species}
                    gender={item.gender}
                   img={item.image}
                />
            ))}
        </div>

    );
};

export default SimpsonCharacterList;