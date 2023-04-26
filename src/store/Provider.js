import {useReducer,createContext} from "react";
import {animalInitialState} from "../Reducers/animalReducer";
import {animalReducer} from "../Reducers/animalReducer";


const StateContext = createContext(null);
const Provider = ({children}) => {

    const reducers = {
        animals: useReducer(animalReducer, animalInitialState),
    }
    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {Provider, StateContext};