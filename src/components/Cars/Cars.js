import {useEffect, useState} from "react";
import {carService} from "../../services/car.service";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [allCars, setAllCars] = useState(null);
    // Создаем состояние при изменении которого будет пересрабатывать useEffect. Так как сама переменная allCars
    //находится в массиве зависимостей useEffect.  А саму функцию setAllCars передаем в форму.
    const [carForUpdate, serCarForUpdate] = useState(null);
    //Состояние для обновление car


    //  ******************************  Д/З   *************************************
    const dalateCar= async (id)=>{
       await carService.deleteById(id);
        setAllCars(prev => !prev)
    }
//**********************************************************************************


    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
        //Используем метод из объекта методов carService.
    }, [allCars])

    console.log(cars);
    return (
        <div>
            <CarForm setAllCars={setAllCars} serCarForUpdate={serCarForUpdate} carForUpdate={carForUpdate}/>
            {/*В переменной состояния carForUpdate будут сохранияться та машина на котороую был произведен клик. Ее передаем в компонент с формой для сохранения
             изменений внесенных в инпуты и дальнейшего сохранения в базе данных.*/}
            <hr/>
            {cars.map(car=><Car key={car.id} car={car} dalateCar={dalateCar} serCarForUpdate={serCarForUpdate}/>)}
        {/* Функцию изменения состояниея carForUpdate передаем в комопнент cars   */}
        </div>
    );
};

export {Cars};
