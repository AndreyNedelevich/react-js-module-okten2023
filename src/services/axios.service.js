import axios from "axios";
import {baseURL} from "../configs/urls";

const axiosService = axios.create({baseURL:baseURL});
//Используем метод create от библиотеки axios и передаем в нее в поле объекта baseURL  нашу БАЗОВУЮ УРЛУ.Сама URL будет сохраненна
//при помощи метода create вернет объект с доступными в нем методами дляя работы с запросами.

//Експорируем.
export {
    axiosService
}
