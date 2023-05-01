import {axiosServicePlaceholder} from "./axiose.service";
import {urlsPlaseholderApi} from "../constans/urls";

const albomService = {
    getAll: ()=> axiosServicePlaceholder.get(urlsPlaseholderApi.albom),
}

export {
    albomService
}