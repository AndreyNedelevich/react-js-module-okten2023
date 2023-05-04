import {reducerCars} from "../reducers/carReducer";
import {configureStore} from "@reduxjs/toolkit";


    const storeReduxToolkit =()=> configureStore({reducer:reducerCars});



export {storeReduxToolkit};