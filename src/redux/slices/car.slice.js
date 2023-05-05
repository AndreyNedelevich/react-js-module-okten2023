import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejectedWithValue, current} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null,
    loading: false,
    error: null
};

//Для создание асихронного действия и объедиения вызова функциии диспетчера и асинхронности используем
// специальную функцию  createAsyncThunk  из библиотеки reduxjs/toolkit.

//Эта функция принимает несколько параметров:
//1) это префикс в основном береться с названия slice и через / ноазванииие метода асинхронности. **carSlice/getAll**
//2) Это асинхронная функция, которая принмает два аргумента:
// 1) Это аргумент котрый мы можем передавать через action (например в AsyncThunk create мы передаем при вызове в компоненте car)
//2)Параметр это thunkAPI котром есть набор инструментов для работы с результатами запросов  в ассинхронный функциях.

//Внутри функции которая передаеться в качестве параметра описываем сам код асинхронныго действийя.(try catch)

//После описание кода далле внутри slice прописываем дополнительно поле extraReducers.
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            // thunkAPI.dispatch()
            //При помощи метода  dispatch  от  thunkAPI можно выполнить отправку action(функции в reducers) внутри метода AsyncThunk

            // console.log(thunkAPI.getState());
            // Можно достать вcе состояния всего общего state полностью. бъеденный state всех slice

            const {data} = await carService.getAll();
            // await new Promise(resolve => setTimeout(resolve, 2000))
            return data
            // return  thunkAPI.fulfillWithValue(data)
            //По правильному нужно было прописывать таким образом но AsyncThunk и так понимает что при успешном запроссе необходимо отдать
            // данные запросса.
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
            //Внутри функции thunkAPI есть метод rejectWithValue при помощи него оранизовуем обработку ошибки и мы ее посылаем в state (поэтому она появляеться в payload)
            // что бы далее ее обработать.
            // мы ее вытягиваем из поля e.response.data и ложим в наш state.
        }

    }
)

// Создаем AsyncThunk для создание нового Car нутри него будет логика и измененния состояния и отправка асинхронно запроса.
//В в анонимной асинхронной функции мы уже принимаем данные {car} и деструктурируем их
const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
            //Обрботка ошибки при помощи метода .rejectWithValue из  thunkAPI
        }
    }
)
const update = createAsyncThunk(
    'carSlice/update',
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

//Создание  slice кусочка состояния с функционалом управлени ним.
const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
            console.log(current(state.cars));
            //При помощи функции  current получаем все значения состояний хранилища или конкретно какой переменной. (cars)
        },
    },

// Существует два врианта организации кода внутри extraReducers :
    // 1)Первый вариант:  Просто объектом.
    //Внутри него прописваем динамический ключ берем из названия AsyncThunk [getAll.fulfilled] и через него можем отслеживать три состояния запроса:
    //1)Динамический ключ (getAll.fulfilled) - при помощи  .fulfilled  если запрос был успешный и далее прописваем код из действий.
    //2)Динамический ключ (getAll.rejected) - при помощи  .rejected если запрос вернулся с ошибкой
    //3)Динамический ключ (getAll.pending) - при помощи  .pendind делает выполнения кода внутри только в момент выполнения запросса.

    //Далее внутри тот же синтаксис кода как и в reducer. TЕсли запрос был успешный то в переменную cars записываем те данные которые
    // передаем в комопненте в action. (сдесь эти данные вытягиваем с поля action.payload)
    //Теперь этот getAll и будет методом Reducer который заменит метод в reducers под названием setAll (но в нем ужебудет и асинхронный код.)
    // extraReducers:{
    //     [getAll.fulfilled]:(state, action)=>{
    //         state.cars = action.payload
    //     },
    //     [create.fulfilled]:state=>{
    //         state.trigger = !state.trigger
    //     }
    // }

// Второй вариант: При помощи Call Beck функции builder.
    // Эта функция возвращает builder с addCase который будет выполнен в зависмоти от вызова функции asynkThunk
    //Внутрь  addCase передаем анонимную функцию ее аргументами будут:
    //Первый аргумент  Названия  AsyncThunk (getAll) и у него так как это объек есть методы к которым мы обращаемя
    // 1)fulfilled (код будет выполнен запрос успешен),
    // 2) pending (код будет выполнен только в момент запросса и остановлен после получения ответа,
    // 3) rejected (код выполниться если вернеться ошибка)

    //Второй аргумент -анонимная функция в ее аргументы если нужеы можна передавать те же  state, action и работать с ними внутри функции.
    // extraReducers: builder =>
    //     builder
    //         .addCase(getAll.fulfilled, (state, action) => {
    //             state.cars = action.payload
    //             state.loading = false
    //         })
    //При вызове функции getAll при помощи метода pending из нее  организовуем запуск внутри  кода который будет изменять состояния
    // в хранилище   isloading  и внутри комопнента где происходит загрузка отобраажть и скрывать какой то индикатор загрузки.
    //         .addCase(getAll.pending, (state) => {
    //             state.loading = true
    //         })
    //         .addCase(create.fulfilled, state => {
    //             state.trigger = !state.trigger
    //             state.loading = false
    //         })

    //При вызове функции create при помощи метода pending из нее  организовуем запуск внутри  кода который будет изменять состояния
    // в хранилище   isloading  и внутри комопнента где происходит загрузка отобраажть и скрывать какой то индикатор загрузки.
    //         .addCase(create.pending, state => {
    //             state.loading = true
    //         })

    // В данном addCase реализовуем на запуск функции create, если из нее вернеться ошибка то внутри анонимной функции
    // мы ее помещаем в переменную error. а саму ошибку получаем через action.payload(в него это ошибка приходит при помощи rejectWithValue через блок catch ).
    // А также дополнительно даже если получаем ошибка то все равно изменяем состояния loading на folse что бы скрыть индикатор загрузки.

    //         .addCase(create.rejected, (state, action) => {
    //             state.error = action.payload
    //             state.loading = false
    //         })

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload

            })
            .addCase(update.fulfilled, state => {
                state.carForUpdate = null
                //ри обновлении car меняем состояния carForUpdate  снова на null для того что бы изменит имя кнопки и вызов функции.
            })
            //При использовании метода builder с caLLBack можно использовать один из case под название .addDefaultCase
            // По сути код в данном блоке будет выполняться всегда даже если не обин  из case не оработал при вызове функции AsyncThunk. Принимает те же параметры что и все остальные case
            // .addDefaultCase((state, action) => {
            //     console.log(action.type);
            // })

            //Подход с .addDefaultCase не совсем удобный есть другой подход addMatcher он позволяет запускать код для
            //конкретных AsyncThunk. Для работы с ними експортируем их из библиотеки @reduxjs/toolkit сами методы (isFulfilled, isPending, isRejectedWithValue)

            .addMatcher(isPending(), (state) => {
                // Если оставляем аргумент isPending( ) пустым то значит будет отрабатывать для всех AsyncThunk
                //Если хоти что бы оторабатывал только для конкретных AsyncThunk прописываем их в аргумент isFulfilled(update, create, deleteCar)
                state.loading = true
                state.error = null

                //Внутри анонимной функции меняем состояния внутри хранилища. В соответствии с выполнениям того или иного
                // процесса в примере выше это процесс isPending() процес получения данных по асинхронному запросу на api.
            })
            .addMatcher(isFulfilled(), state => {
                state.loading = false
                state.error = null
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addMatcher(isFulfilled(update, create, deleteCar), state => {
                //Если хоти что бы оторабатывал только для конкретных AsyncThunk прописываем их в аргумент isFulfilled(update, create, deleteCar)
                state.trigger = !state.trigger
            })
});

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar
    //Все методы которые мы создали при помощи createThunk и прописали действия при них внутри extraReducer прописываем сюда.
}

export {
    carReducer,
    carActions
}
