
// В данной переменной создаем объект carActionTypes. Строковое представление action. Далее оно используеться внутри carReducer
const carActionTypes = {
    SET_ALL: 'SET_ALL',
    SET_CAR_FOR_UPDATE: 'SET_CAR_FOR_UPDATE',
    TRIGGER: 'TRIGGER'
}


//ДЛя того что бы не писать каждый раз в функцию Dispatch не писать все описания action
//Создаем объект  с методами где будут описанны разные варинты action. + Помещения в них как аргументов массивов Cars или одной машины.
const carActions = {
    setAll:(cars)=>({type:carActionTypes.SET_ALL, payload:cars}),
    setCarForUpdate:(car)=>({type:carActionTypes.SET_CAR_FOR_UPDATE, payload:car}),
    setTrigger:()=>({type:carActionTypes.TRIGGER}),
    //В setTrigger мы не передаем не каких данных а только передаем action c соответствующим  type
    // (При каждом вызове просто дефолтное булин значения меняеться на противоположное.)
}

//Изначальное дефолтное состояния мы его передаем в хук seReducer()
const carInitialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
}


//В данном файле мы описываем всю логику функции Reducer. Данная функция будет произодить изменеия в контексте по той логике которая будет
// совпадения оправленного type.
const carReducer = (state, action) => {
    switch (action.type) {
        //Логика помещения в Cars всех загруженных Cars
        case carActionTypes.SET_ALL:
            // В поле  cars мы кладем все что будет помощенно  в  ее аргумент при отправки action.
            // Эти данные автоматически будут помещенны в поле
            return {...state, cars: action.payload}
     //Логика обновления массива всех  Cars .
        case carActionTypes.SET_CAR_FOR_UPDATE:
            return {...state, carForUpdate: action.payload}
        case carActionTypes.TRIGGER:
            return {...state, trigger: !state.trigger}
        // В данной action делаем изменения в поле trigger  булин значения на противоположное.
        default:
            return state
    }
}

//Експортируем именнованными экспортами данные для использование внутри хука useReducer()
export {
    carActions,
    carInitialState,
    carReducer
}
