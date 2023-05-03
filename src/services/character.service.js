import {axiosService} from "./axios.service";
import {urls} from "../constants";

const characterService = {
    // В методе getall дополнительно передаем  объект конфигурации  вторым параметром где указываем в поле params какую страницу будет отдавать сервер
// 1 параметр это ендпоинт characters прибаяляеться к базоаой урле
    getAll: (page = 1) => axiosService.get(urls.characters, {params: {page:page}})
    //При вызове метода getAll если мы не передаем параметр page то по фефолту она будет 1. В зависимости от этого аргумента
    //который будет попадать в объект параметров params: {page:page} будет номером  страницы по которой сервер будет отдавать данных. age выступает как queryParams
}


export {
    characterService
}
