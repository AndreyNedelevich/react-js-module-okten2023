import React from 'react';
import {Link} from "react-router-dom";

const User = ({item}) => {
    return (
        <div>
            <Link to={item.id.toString()} state={{...item}}>
                {/*Помещаем информацию об объекте с данными об User в state  Далее при помощи хука useLocation() как тольк
                  мы производим клик на user данный номер ID помещаеться в строку срабатывает тригер определение конкретного Route
                    и информация отображаеться на странице.*/}
                {item.name}
            </Link>
        </div>
    );
};

export default User;
