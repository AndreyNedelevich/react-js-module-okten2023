import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    prevPage: null,
    nextPage: null
};

const slice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            const {results, info: {next, prev}} = action.payload;
            //Api отдает нам объект в котором есть объект results с персонажами и объект info вутри которого есть поля next, prev мы их
            // деструктуруем.
            state.characters = results
            state.prevPage = prev
            state.nextPage = next
        }
    }
});

const {reducer: characterReducer, actions} = slice;

const characterActions = {
    ...actions
}

export {
    characterReducer,
    characterActions
}
