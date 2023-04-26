import {useEffect, useState} from "react";
import {postService} from "../services/post.service";

const Posts = ({flag}) => {
    console.log('constructor');
    //Первое что выполниться при запуске 'constructor'. Код функции. Далее при обновленни компоненты код функции будет выполнен снова
    // все кроме кода внутри useEffect().

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(value => value.data).then(value => setPosts(value))
        console.log('componentDidMount');
        // Третим отработает код внутри useEffect()  "componentDidMount". Всегда код в useEffect отработает после return
        return ()=>{
            console.log('componentWillUnmount');
            // Как только компонента удаляеться из DoM ДЕМОНТИРУЕТЬСЯ. Всегда отрабатываеь return внутри  seEffect и в нем мы можем отписаться
            // от нтевалов, таймаутов или слушателей событий.

         }
    }, [])

    useEffect(() => {
        console.log('update');
    //Если компонент будет обновляться при изменении переменной в массиве зависимостей  или состояняив srState. Этот
    //код будет выпонент Четвертым.
    }, [posts])

    return (
        <div>
            {console.log('render')}
            {/*Второе что будет выполненно при запуске функционального компонента 'render'.*/}
            Posts
        </div>
    );
};

export {Posts};
