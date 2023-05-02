import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {Routes,Route,Navigate} from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentPage from "../pages/CommentPage";
import AlbomsPage from "../pages/AlbomsPage";
import Error from "../pages/Error";
import TodosPage from "../pages/TodosPage";
import CarsPage from "../pages/CarsPage";
import Login from "./Login/Login";


const AppRoutes = () => {
    // const reducersAction = useSelector(state=>state.placeholderReducer)
   const isLoggedIn =  useSelector(state=>state.logginReducer.isUserLoggedIn)
    // const dispatchFunction = useDispatch();





    return (
            isLoggedIn?
    <Routes>
        <Route  path="/users" element={<UsersPage/>}/>
        <Route  path="/posts" element={<PostsPage/>}/>
        <Route  path="/comments" element={<CommentPage/>}/>
        <Route  path="/todos" element={<TodosPage/>}/>
        <Route  path="/alboms" element={<AlbomsPage/>}/>
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