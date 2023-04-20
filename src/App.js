import {Link, Route, Routes} from "react-router-dom";

import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import About from "./components/about/About";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import UserDetails from "./components/user-details/UserDetails";
import PostDetails from "./components/post-details/PostDetails";
import Todos from "./components/Todos/Todos";
import Albums from "./components/Albums/Albums";
import Comments from "./components/Comments/Comments";
import "./App.css"
import PostInfo from "./components/Comments/PostInfo";
import Comment from "./components/Comments/Comment";

const App = () => {
    // сделай еще небольшую правку в lesson4:

    //     реалізувати 3 маршрути
    // todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
    //     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
    //     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
    //     при натисканні на комментар тягнеться пост, до якого належіить цей коментар. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
    //     id поста взяти з коментаря (postId)
    // відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.

    // link изменяет адресс в адресной строке а  а информация из адресной строке подхватываеться компонентом Routes
    //И в зависимости от соответствия с одним из Route выводиться информация.

    return (
        <div>
            {/*Данный DIV будет отвечать за меню*/}
            <div>
                <h2>menu</h2>
                <ul>
                    <li>
                        <Link to={'/'}>home</Link>
                    {/*    Используем всесто тего a потому что тег а с href будет перегружать всю страницу а Реакт в первую очередб
                   Singl Page Application.*/}
                    </li>
                    <li>
                        <Link to={'/layout'}>layout</Link>
                    </li>
                    <li>
                        <Link to={'/todos'}>todos</Link>
                    </li>
                    <li>
                    <Link to={'/albums'}>albums</Link>
                </li>

                    <li>
                        <Link to={'/about'}>about</Link>
                    </li>
                </ul>
            </div>

            {/*Данный DIV будет отвечать за отображения информации при клике на меню.*/}
            <div>
                <h2>view</h2>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/layout'} element={<Layout/>}>
                        <Route path={'users'} element={<Users/>}>
                            <Route path={':id'} element={<UserDetails/>}/>
                        </Route>
                        <Route path={'posts'} element={<Posts/>}>
                            <Route path={':id'} element={<PostDetails/>} />
                        </Route>
                        <Route path={'comments'} element={<Comments/>}>
                            {/*<Route path={':Id'} element={<Comment/>} />*/}
                        </Route>
                    </Route>
                    <Route path={'todos'} element={<Todos/>}/>
                    <Route path={'albums'} element={<Albums/>}/>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>

            </div>
        </div>
    );
};

export default App;
