import {createSlice} from "@reduxjs/toolkit";


const initialState={
    isUserLoggedIn: null
}




const slice=createSlice({
    name:'logginSlice',
    initialState,
    reducers:{
        changeIsUserLoggedIn:(state,action)=>{
            state.isUserLoggedIn=action.payload
        },

    }
})



const {reducer:reducerLoggin,actions}=slice


const logginActions={
    ...actions
}

export {
    logginActions,
    reducerLoggin
}

