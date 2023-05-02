import {axiosServicePlaceholder} from "./axiose.service";
import {urlsPlaceholderApi} from "../constans/urls";


const commentService = {
    getAll:()=>axiosServicePlaceholder.get(urlsPlaceholderApi.comments),
    getByIdComment: (id)=>axiosServicePlaceholder.get(urlsPlaceholderApi.getByidComment(id)),
    getByIdCommentsPost:(id)=>axiosServicePlaceholder.get(urlsPlaceholderApi.getCommentsByIdPost(id)),
}

export {
    commentService
}
