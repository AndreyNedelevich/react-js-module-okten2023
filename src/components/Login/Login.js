import React from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import style from "./login.module.css"
import {useDispatch} from "react-redux";
import {logginActions} from "../../reducers/logginReducers";



const Login = () => {

   const dispatch =  useDispatch()




    const login = event => {
        event.preventDefault();
        dispatch(logginActions.changeIsUserLoggedIn(true));
        localStorage.setItem('auth', 'true')
    }




    return (
        <div className={style.wrapper}>
            <h1>Страница для логина</h1>
            <form onSubmit={login} className={style.form} >
                <Input type="text" placeholder="Введите логин"/>
                <Input type="password" placeholder="Введите пароль"/>
                <Button>Войти</Button>
            </form>
        </div>
    );
};

export default Login;