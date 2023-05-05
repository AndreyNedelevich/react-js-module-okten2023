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
            // console.log(thunkAPI.getState());
            const {data} = await carService.getAll();
            // await new Promise(resolve => setTimeout(resolve, 2000))
            return data
            // return  thunkAPI.fulfillWithValue(data)
            //По правильному нужно было прописывать таким образом но AsyncThunk и так понимает что при успешном запроссе необходимо отдать
            // данные запросса.
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
            //Внутри функции thunkAPI есть метод rejectWithValue при помощи него оранизовуем обработку ошибки, если будет ошибка
            // мы ее вытягиваем из поля e.response.data
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


const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
            console.log(current(state.cars));
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
    //

    // extraReducers: builder =>
    //     builder
    //         .addCase(getAll.fulfilled, (state, action) => {
    //             state.cars = action.payload
    //             state.loading = false
    //         })
    //         .addCase(getAll.pending, (state) => {
    //             state.loading = true
    //         })
    //         .addCase(create.fulfilled, state => {
    //             state.trigger = !state.trigger
    //             state.loading = false
    //         })
    //         .addCase(create.pending, state => {
    //             state.loading = true
    //         })
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
            })
            // .addDefaultCase((state, action) => {
            //     console.log(action.type);
            // })
            .addMatcher(isPending(), (state) => {
                state.loading = true
                state.error = null
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
