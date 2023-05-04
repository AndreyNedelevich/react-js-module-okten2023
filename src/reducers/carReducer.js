import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
}

const slice=createSlice({
    name:'carsSlice',
    initialState,
    reducers:{
        setAllCars:(state,action)=>{
            state.cars=action.payload
        },
        updateCar:(state,action)=>{
            state.carForUpdate=action.payload
        },
        trigger:(state,action)=>{
            state.trigger=!state.trigger
        }

    }
})

const {reducer:reducerCars,actions}=slice


const carsActions={
    ...actions
}

export {
    carsActions,
    reducerCars
}

