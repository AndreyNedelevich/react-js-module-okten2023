import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducerCars} from "../reducers/carReducer";
import {reducerLoggin} from "../reducers/logginReducers";
import {reducerPlaceholder} from "../reducers/placeholder.reducer";

const rootReducer = combineReducers({
    cars: reducerCars,
    loggin: reducerLoggin,
    placeholder:reducerPlaceholder
});


const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}





