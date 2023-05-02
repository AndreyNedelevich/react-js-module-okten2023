import {axiosServicePlaceholder} from "./axiose.service";
import {urlsPlaceholderApi} from "../constans/urls";


const commentService = {
    getAll:()=>axiosServicePlaceholder.get(urlsPlaceholderApi.comments),
    getByidPost: (id)=>axiosServicePlaceholder.get(urlsPlaceholderApi.getByidPost(id)),
}

export {
    commentService
}