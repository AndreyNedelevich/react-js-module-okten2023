import React from 'react';
import {useDispatch} from "react-redux";
import {carsActions} from "../../reducers/carReducer";

const Car = ({car}) => {
    const dispatch = useDispatch();

    const {id, brand, price, year} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carsActions.updateCar(car))}>update</button>
        </div>
    );
};

export default Car