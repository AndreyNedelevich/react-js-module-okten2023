import {useEffect, useReducer} from "react";

const reducer = (state, action) => {
    //state  это то состояние которое будет отдавать сам Reducer
    // action - какое конкретное действие будет применяться к этому состоянию state.   !!!action - это всегда объект.
    switch (action.type) {
        case 'INC1':
            return {...state, count1: state.count1 + 1}
        case 'DEC1':
            return {...state, count1:state.count1-1}
        case 'RESET1':
            return {...state, count1:action.payload}
        case 'INC2':
            return {...state, count2: state.count2 + 1}
        case 'DEC2':
            return {...state, count2:state.count2-1}
        case 'RESET2':
            return {...state, count2:action.payload}
    }
    return {...state}
}
const App = () => {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2:0});
    //Хук useReducer это усовершенствованный useState потому что он не только может сохраниять какие то состояния. Но при помощи его
    //можно совершать какие то действия над этим состоянием.
    //state - состояние (Значения)
    //dispatch функция для отправки action в Reucer там она обработаетьс и в завимости от type будет измененно состояние.

    //Первый параметр это дефолтные значения.
    //Второй параметр это функция reducer где прописанна ллогика реагирование на action. В зависмости от переданного type

    return (
        <div>
            <div>{state.count1}</div>
            <button onClick={() => dispatch({type: 'INC1'})}>inc</button>
            <button onClick={() => dispatch({type: 'DEC1'})}>dec</button>
            <button onClick={() => dispatch({type: 'RESET1', payload:25})}>reset</button>
            <div>{state.count2}</div>
            <button onClick={() => dispatch({type: 'INC2'})}>inc</button>
            <button onClick={() => dispatch({type: 'DEC2'})}>dec</button>
            <button onClick={() => dispatch({type: 'RESET2', payload:25})}>reset</button>
        </div>
    );
};

export default App;
