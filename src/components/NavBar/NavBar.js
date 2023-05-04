import css from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {logginActions, logginReducer} from "../../reducers/logginReducers";
import {useDispatch} from "react-redux";
import React from "react";
import Button from "../UI/Button/Button";
import Loader from "../Loader/Loader";

const NavBar = () => {

  const dispatch =  useDispatch()

   const isLoggedIn =  useSelector(state=>state.logginReducer.isUserLoggedIn)

    const logout = () => {
        dispatch(logginActions.changeIsUserLoggedIn(false));
        localStorage.removeItem('auth')
    }




    return (
        <div className={css.Header}>
            {isLoggedIn &&
         <React.Fragment>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'todos'}>Todos</NavLink>
            <Button onClick={logout}>Выйти</Button>
        </React.Fragment>
}
        </div>
    );
};

export {NavBar};