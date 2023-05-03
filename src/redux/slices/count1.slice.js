import {createSlice} from "@reduxjs/toolkit";

//Функция createSlice предназначенна для создания кусочко хранилища. На каждую сущность мы должны создавать одельный slice.


const initialState = {
    count1: 0,
};

const slice = createSlice({
    name: 'count1Slice',
    initialState,
    reducers: {
        inc: state => {
            state.count1 += 1
        },
        dec: state => {
            state.count1 -= 1
        },
        reset:state => {
            state.count1 = 0
        }
    }
});


//Далее после того когда мы создали на кусочек хранилища мы обращаемя к нему (slice) это на самом деле объект который возвращает
// нам необходимый функционал:
// 1)reducer уже готовый сформированный по нашим функциям внутри slice )
//2) actions - что возвращает actions для
const {reducer:count1Reducer, actions} = slice;
//ПРи помощи двоеточия просто переименновуем reducer так как мы будем пользоваться combineReducer и название Reducerov
//должны быть разные.


const count1Actions = {
    ...actions
}


export {
    count1Reducer,
    count1Actions
}
