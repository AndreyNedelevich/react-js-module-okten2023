import {createContext, useReducer} from "react";
import {carInitialState, carReducer} from "../reducers/car.reducer";

const StateContext = createContext(null);
//Создаем сам контекс по дефолту там будет храниться null

//В данном фале мы создаем комопоненту выщего порядка. Данная компонента будет старше на всеми компонентами.
// Хуки можно использовать пр созлании новый хуков или внутри компонетов.
const Provider = ({children}) => {

    //В качестве value мы будем использовать объект с название reducers
    //В нем будет ключ cars и он будет всегда отвечать за вызов хука  useReducer()
    //Важно что таких Reducerov со своей логикой можно добавлять любое количество.
    const reducers = {
        cars: useReducer(carReducer, carInitialState),
    }


    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
        //Как обвертку вызываем  от StateContext метод Provider и в него передаем children (булут все компоненты которые
        // будут оборачиваться комопнентом Provider )
    );
};

export {Provider, StateContext};
