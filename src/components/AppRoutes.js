import React from 'react';
import {useSelector} from "react-redux";
import {Routes,Route,Navigate} from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentPage from "../pages/CommentPage";
import AlbumsPage from "../pages/AlbumsPage";
import Error from "../pages/Error";
import TodosPage from "../pages/TodosPage";
import CarsPage from "../pages/CarsPage";
import Login from "./Login/Login";
import UserDetails from "./Users/UserDetails";
import PostDetails from "./Posts/PostDetails";
import {PostInform} from "./Comments/PostInform";
import PostByUserPage from "../pages/PostByUserPage";
import CommentsByPostPage from "../pages/CommentsByPostPage";


const AppRoutes = () => {

   const isLoggedIn =  useSelector(state=>state.logginReducer.isUserLoggedIn)



    return (
            isLoggedIn?
    <Routes>
        <Route  path="/users" element={<UsersPage/>}>
            <Route path={':id'} element={<UserDetails/>}/>
        </Route>
        <Route  path="/posts" element={<PostsPage/>}>
            <Route path={':id'} element={<PostDetails/>} />
        </Route>
        <Route  path="/users/:id/posts" element={<PostByUserPage/>}/>
        <Route  path="/post/:id/comments" element={<CommentsByPostPage/>}/>
        <Route  path="/comments" element={<CommentPage/>}>
            <Route path={':postId'} element={<PostInform/>}/>
        </Route>
        <Route  path="/todos" element={<TodosPage/>}/>
        <Route  path="/albums" element={<AlbumsPage/>}/>
        <Route  path="/cars" element={<CarsPage/>}/>
        <Route  path="/error" element={<Error/>}/>
        <Route path="/*" element={<Navigate to="/users" replace/>}/>
    </Routes>
:
    <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route path="/*" element={<Navigate to="/login" replace/>}/>
    </Routes>
    );
};

export default AppRoutes;