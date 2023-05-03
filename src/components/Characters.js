import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {characterService} from "../services";
import {characterActions} from "../redux";
import {Character} from "./Character";
import {useSearchParams} from "react-router-dom";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const [query, setQuery] = useSearchParams();
    //Хук useSearchParams возвращает массив с двух параметров.
    // Первый это query (в нем храниться  информация о том номере страницы которая находиться в адресной строке, )
    // , второй это setQuery(изменяем параметр query) при установки новго числово значенияя страницы page

    useEffect(() => {
        setQuery(prev => ({...prev, page: '1'}))
    }, [])
    //Делаем useEffect  котрый будет выполнен только 1 раз и он при помщи функции setQuery из хука useSearchParams()
    //будет записывать прямо в URL  номер страницы для загрузки ее при первм запуске страницы. Она и погрузиться первой.


    useEffect(() => {
        characterService.getAll(+query.get('page')).then(value => value.data).then(value => dispatch(characterActions.setCharacters(value)))
    }, [query])
    //В  useEffect в массиве зависимостей будем следить за параметром query из хука  useSearchParams();
    //При запросе на сервер мы используя метод get для  query достаем из адресной строки номер Page. Код срабатывает при каждом изменении
    //query

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};
