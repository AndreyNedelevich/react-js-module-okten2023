import {useContext} from "react";
import {StateContext} from "../hoc/Provider";


const useAppReducer = (state)=>state(useContext(StateContext))
// useAppReducer это будет функция которая в аргумент будет принимать CallBeck функцию.


export {
    useAppReducer
}
