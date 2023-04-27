import React from 'react';
import {useAppReducer} from "../hooks/useAppReducer";
import {animalActions} from "../Reducers/animalReducer";
import MyButton from "../UI/MyButton/MyButton";

const Cat = ({cat}) => {
    const {id,catName}=cat
    const [, dispatch] = useAppReducer(state=>state.catDogs);

    return (
        <div>
            <span>{id}: {catName}</span>
            <MyButton onClick={()=>dispatch(animalActions.RemoveCat(id))}>Delete</MyButton>
        </div>
    );
};

export default Cat;