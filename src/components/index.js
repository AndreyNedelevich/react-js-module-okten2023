export * from './Header';
export * from './ComponentOne';
export * from './ComponentTwo'

//Для того что бы в других кмопнентах можно было импортирвоть одной строчуой компоненты из конкретной папки для
//этого мы все комопнеты из папки components експортируем.

//Обезательное условие все комопненты должны экспортирвоаться таким образом  -  export {ComponentTwo};

//Соотвтетвенно в файле App как пример ожно импортировать файлы более эдобно и локонично.
//import {ComponentOne, ComponentTwo, Header} from "./components";

