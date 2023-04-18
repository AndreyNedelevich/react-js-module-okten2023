import {axiosService} from './axios.service';
import {urls} from "../configs/urls";

// В объекте carService мы будем описывать все действие которые мы можем совершать при отправке запросса.
//Прсто список енжпоинтов
const carService = {
    getAll: () => axiosService.get(urls.cars),
    // метод под название getAll а его value будет функция и код который будет выполняться и возвращать Promise.
    //В axiosService уже находяться базовая URL
    //Внутрь метода get  передаем из експортируемого объекта urls поле с окончанием строки запросса.
    create: (car) => axiosService.post(urls.cars, car),
    // Метод create принимает аргумент (в нем будут данные новой машинны) принимает функцию для создание новой машины в базе данных.
    //Объект с данными новой машинны передаем вторым аргументом.
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    //Вытягиваем данные по id конкретной машинны
    updateById: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    //Первый аргумент это id машинны которую хотим обновить а второй сама информация в виде объека (car).
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}
