import axios from "axios";
import {urls} from "../constans/urls";

import {baseURL} from "../constans/urls";


const axiosService=axios.create({baseURL});

const allService={
    getAllPosts: () => axiosService.get(urls.posts),
    getAllComments: () => axiosService.get(urls.comments),
}



export {
    axiosService,
    allService
}