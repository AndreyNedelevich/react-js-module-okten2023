import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const CharacterPagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.characters);
    //Достаем их хранилища тулкит кусочек состояний и деструктиризуем те поля который нам будут нужны.

    const [,setQuery] = useSearchParams();
    //Хук useSearchParams возвращает массив с двух параметров. Первый это query(), второй это setQuery
    // (используем для изменения оного из  ueryParams (пример внизу с page))

    const prev = () => {
        setQuery(prev1 => ({...prev1, page:+prev1.get('page')-1}))
        //В функцию измения состояния setQuery в качестве параметра указываем функцию так как нам необходимо использовать
        //предидущее состония так как они взаимосвязанны  раскладываем объект ...prev1 и внутри него получаем при помощи
        //метода get получаем номер текущей страницы уменьшаем на 1 и это измененное значения передаеться в функцию setQuery
        //!!! Обезательно конвектируем к числовому типу при помощи +
    }

    const next = ()=>{
        setQuery(prev1 => ({...prev1, page:+prev1.get('page')+1}))
        //В функцию измения состояния setQuery в качестве параметра указываем функцию так как нам необходимо использовать
        //предидущее состония так как они взаимосвязанны  раскладываем объект ...prev1 и внутри него получаем при помощи
        //метода get получаем номер текущей страницы прибавляем к ней +1 и это измененное значения передаеться в функцию setQuery
    }
    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>prev</button>
            {/*Если в prevPage будет null соответсвенно значит это первая страница то мы изменяем это булин значения на противоположное
            будет true и кнопка будет неактивна*/}
            <button disabled={!nextPage} onClick={next}>next</button>
        {/* Если nextPrev будет равен null то кнопка будет неактивна по той же логике что и с верхней кнопкой.   */}
        </div>
    );
};

export {CharacterPagination};
