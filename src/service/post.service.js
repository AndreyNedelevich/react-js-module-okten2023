import {axiosServicePlaceholder} from "./axiose.service";
import {urlsPlaceholderApi} from "../constans/urls";


const postService = {
    getAll:()=>axiosServicePlaceholder.get(urlsPlaceholderApi.posts),
    getByidPost: (id)=>axiosServicePlaceholder.get(urlsPlaceholderApi.getByidPost(id)),
    getByIdPostsUser:(id)=>axiosServicePlaceholder.get(urlsPlaceholderApi.getPostsByIdUser(id)),
}

export {
    postService
}