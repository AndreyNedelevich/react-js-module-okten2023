import React from 'react';
import {useAppReducer} from "../hooks/useAppReducer";
import Dog from "./Dog";

const Dogs = () => {

  const [{dogs},dispatch] = useAppReducer(state => state.catDogs)

    console.log(dogs);


    return (
        <div>
            {dogs.map((dog)=><Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export default Dogs;