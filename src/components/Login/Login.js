import React from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import style from "./login.module.css"
import {useDispatch, useSelector} from "react-redux";
import {placeholderActions} from "../../reducers/placeholder.reducer";


const Login = () => {

   const dispatchFanction =  useDispatch()


    const login = event => {
        event.preventDefault();
        dispatchFanction(placeholderActions.changeIsUserLoggedIn(true));
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