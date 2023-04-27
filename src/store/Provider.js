import {useReducer,createContext} from "react";
import {animalInitialState, animalReducer} from "../Reducers/animalReducer";



const StateContext = createContext(null);
const Provider = ({children}) => {

    const reducers = {
        catDogs: useReducer(animalReducer, animalInitialState),
    }




    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {Provider, StateContext};