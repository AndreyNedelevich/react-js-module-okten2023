import {axiosServicePlaceholder} from "./axiose.service";
import {urlsPlaseholderApi} from "../constans/urls";


const commentService = {
    getAll:()=>axiosServicePlaceholder.get(urlsPlaseholderApi.comments),
    getByIdComment: (id)=>axiosServicePlaceholder.get(urlsPlaseholderApi.getByidComment(id)),
}

export {
    commentService
}
