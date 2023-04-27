import React from 'react';
import {useAppReducer} from "../hooks/useAppReducer";
import {animalActions} from "../Reducers/animalReducer";
import MyButton from "../UI/MyButton/MyButton";

const Dog = ({dog}) => {
    const {id,dogName}=dog
    const [, dispatch] = useAppReducer(state=>state.catDogs);

    return (
        <div className='block'>
            <span>{id}: {dogName}</span>
            <MyButton onClick={()=>dispatch(animalActions.RemoveDog(id))}>Delete</MyButton>
        </div>
    );
};

export default Dog;