import axios from "axios";
import { basePlaseholderUrl,baseCarsUrl} from "../constans/urls";

const axiosServicePlaceholder = axios.create({basePlaseholderUrl});
const axiosServiceCars = axios.create({baseCarsUrl});


export {
    axiosServicePlaceholder,
    axiosServiceCars
}