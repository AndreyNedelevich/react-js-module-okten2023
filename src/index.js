import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import App from './App';
import {setupStore} from "./redux";
//Импорт функции котрая возврощает хранилище.

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();
//Сдесь так как store мы создали при помощи функции для типизации. Эту функцию импортируем и далее сдесь вызываем.
//И то что она верент и будет хранилищем котрое мы передадим в обезательный аргумент store в специальный комопонент Provider
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
