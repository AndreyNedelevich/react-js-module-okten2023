import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

export const Context = createContext(null);
// Создаем контекст при помощи метода createContext в него обезательно передаем дефолтные данные контекста.
//В ответ из данного метода получаем компоненту которая имет метод Provider.
//ЧТо бы данные внутри контекста стали доступны во всем приложении оборачиваем этим комопнентом с с=методом Основной родительский
//компонент App

const value = {}
// передаем в него пустой объект в пропс value

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={value}>
    <App/>
    </Context.Provider>
);
