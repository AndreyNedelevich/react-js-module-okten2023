import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {count1Reducer, count2Reducer} from "./slices";

const rootReducer = combineReducers({
    count1: count1Reducer,
    count2: count2Reducer
    //Добавляем в combineReducers те Rducer которые получили при создании кусочка хранилища (createSlice) мы их переименовали
    // и еспортировали в данный файл.
});

const setupStore = () => configureStore({
    reducer: rootReducer
});
// configureStore - функция для создания хранилища Redux Toolkit  в нее как параметр передаем Reducer один или
//нексколько(при помощи combineReducers)
//При использовании typeScript что бы иметь возможность протипизировать reduxToolkit используем при создании
// хранилища анонимную функцию которая будет возвращать configureStore с параметрами. Мы просто создали функцию которая возвращает этот store

export {
    setupStore
}
