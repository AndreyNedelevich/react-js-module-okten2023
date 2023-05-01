import {axiosServicePlaceholder} from "./axiose.service";
import {urlsPlaseholderApi} from "../constans/urls";

const userService = {
    getAll: ()=> axiosServicePlaceholder.get(urlsPlaseholderApi.users),
    getByIdUser: (id)=>axiosServicePlaceholder.get(urlsPlaseholderApi.getByIDUser(id)),
    // create: (user)=> axiosServicePlaceholder.post(urlsPlaseholderApi.users, user)
}


export {
    userService
}