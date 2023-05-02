import {axiosServicePlaceholder} from "./axiose.service";
import {urlsPlaceholderApi} from "../constans/urls";

const albumService = {
    getAll: ()=> axiosServicePlaceholder.get(urlsPlaceholderApi.albums),
}

export {
    albumService
}