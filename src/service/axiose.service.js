import axios from "axios";
import { basePlaceholderUrl,baseCarsUrl} from "../constans/urls";

const axiosServicePlaceholder = axios.create({baseURL:basePlaceholderUrl})
const axiosServiceCars = axios.create({baseURL:baseCarsUrl});


export {
    axiosServicePlaceholder,
    axiosServiceCars
}