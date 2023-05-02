import {axiosServicePlaceholder} from "./axiose.service";
import {urlsPlaceholderApi} from "../constans/urls";

const albomService = {
    getAll: ()=> axiosServicePlaceholder.get(urlsPlaceholderApi.albom),
}

export {
    albomService
}