import {useEffect} from "react";
import {carService} from "../../services/car.service";
import {Car} from "../Car/Car";
import {useAppReducer} from "../../hooks/useAppReducer";
import {carActions} from "../../reducers/car.reducer";


const Cars = () => {


    const [{cars, trigger}, dispatch] = useAppReducer((state)=>state.cars);
    //В Reducer мы должны передать 1)название функции Reducer (С логикой изм. состояния), 2) Дефолтное состяние.
    //Вместо этого мы вызваем кастомный хук useAppReducer и передаем в него CallBeck??? Этот CallBeck по сути возвращает нам:
    // useReducer(carReducer, carInitialState) из файла Provider. Возвращаеться  по сути не весь  Reducer а только его
    //часть. Та часть Reducer которая возвращаеться завист от ключа котрый мы укажим в state (state.cars)

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => dispatch(carActions.setAll(value)))
    }, [dispatch, trigger])

    return (
        <div>
            <hr/>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
