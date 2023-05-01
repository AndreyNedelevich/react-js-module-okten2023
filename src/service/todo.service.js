import {axiosServicePlaceholder} from "./axiose.service";
import {urlsPlaseholderApi} from "../constans/urls";

const todoService = {
    getAll: ()=> axiosServicePlaceholder.get(urlsPlaseholderApi.todos),
}


export {
   todoService
}