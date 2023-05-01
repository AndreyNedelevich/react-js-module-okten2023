import {axiosServicePlaceholder} from "./axiose.service";
import {urlsPlaseholderApi} from "../constans/urls";


const commentService = {
    getAll:()=>axiosServicePlaceholder.get(urlsPlaseholderApi.comments),
    getByidPost: (id)=>axiosServicePlaceholder.get(urlsPlaseholderApi.getByidPost(id)),
}

export {
    commentService
}