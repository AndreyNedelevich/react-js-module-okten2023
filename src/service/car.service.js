import {axiosServiceCars} from "./axiose.service";
import {urlsCarsApi} from "../constans/urls";

const carService = {
    getAll: ()  => axiosServiceCars.get(urlsCarsApi.cars),
    create: (car) => axiosServiceCars.post(urlsCarsApi.cars, car),
    updateByIdCar: (id, car) => axiosServiceCars.put(urlsCarsApi.byIdCar(id), car),
    deleteByIdCar: (id)=> axiosServiceCars.delete(urlsCarsApi.byIdCar(id))
}


export {
    carService
}