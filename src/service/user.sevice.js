import {axiosServicePlaceholder} from "./axiose.service";
import { urlsPlaceholderApi} from "../constans/urls";

const userService = {
    getAll:  () =>    axiosServicePlaceholder.get(urlsPlaceholderApi.users),
    getByIdUser: (id)=>axiosServicePlaceholder.get(urlsPlaceholderApi.getByIDUser(id)),
    // create: (user)=> axiosServicePlaceholder.post(urlsPlaseholderApi.users, user)
}


export {
    userService
}