import React from 'react';
import {useDispatch} from "react-redux";
import {carsActions} from "../../reducers/carReducer";
import {useFetching} from "../../hooks/useFetching";
import {carService} from "../../service/car.service";

const Car = ({car}) => {
    const dispatch = useDispatch();
    const {id, brand, price, year} = car;
    const [delateCar, ] = useFetching(
        async () => {
            await carService.deleteByIdCar(id);
            dispatch(carsActions.trigger())
        }
    );





    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carsActions.updateCar(car))}>update</button>
            <button onClick={()=>delateCar(id)}>delete</button>
        </div>
    );
};

export default Car