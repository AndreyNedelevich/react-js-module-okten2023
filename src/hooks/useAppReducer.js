import {useContext} from "react";
import {StateContext} from "../store/Provider";

const useAppReducer = (state)=>state(useContext(StateContext))


export {
    useAppReducer
}