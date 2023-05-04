import React from 'react';
import Car from "./Car";

const Cars = ({cars}) => {


    return (
        <div className='block'>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;