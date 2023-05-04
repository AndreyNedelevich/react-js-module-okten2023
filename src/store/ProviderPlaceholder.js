import {placeholderReducer} from "../reducers/placeholder.reducer";
import {logginReducer} from "../reducers/logginReducers";
import {combineReducers, createStore} from "redux";
import { Provider } from "react-redux";




const ProviderRedux = ({children}) => {



    const reducers = combineReducers({
        placeholderReducer,
        logginReducer,
    })

  const storeRedux = createStore(reducers);

    return (
        <Provider store={storeRedux}>
            {children}
        </Provider>
    );
};

export {ProviderRedux};





