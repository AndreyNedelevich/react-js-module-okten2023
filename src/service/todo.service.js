import {axiosServicePlaceholder} from "./axiose.service";
import {urlsPlaceholderApi} from "../constans/urls";

const todoService = {
    getAll: ()=> axiosServicePlaceholder.get(urlsPlaceholderApi.todos),
}


export {
   todoService
}