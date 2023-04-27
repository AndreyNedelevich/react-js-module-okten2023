import React from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import {useAppReducer} from "../../hooks/useAppReducer";
import {animalActions} from "../../Reducers/animalReducer";
import {useState} from "react";


const FormNewAnimal = () => {

    const [arrays, dispatche] = useAppReducer(state => state.catDogs)

    const [stateCat, setStateCat] = useState({catName:''});
    const [stateDog, setStateDog] = useState({dogName:''});


    const saveCat = (e) => {
        e.preventDefault()
        if(stateCat.catName.trim() !== ''){
            dispatche(animalActions.AddCat(stateCat))
            setStateCat({catName:''})
        }

    }

    const saveDog = (e) => {
        e.preventDefault()
        if(stateDog.dogName.trim()!==''){
            dispatche(animalActions.AddDog(stateDog))
        }
        console.log(arrays);
        setStateDog( {dogName:''})
    }



    return (
        <div className='wrapper'>
        <form onSubmit={saveCat}>
            <MyInput
                type="text"
                label="Add Cat:"
                value={stateCat.catName}
                id="cat"
                onChange={(e) => setStateCat(  {catName: e.target.value})}
            />
            <MyButton>Save</MyButton>
            </form>

            <form onSubmit={saveDog}>
            <MyInput
                type="text"
                label="Add Dog:"
                value={stateDog.dogName}
                id='dog'
                onChange={(e) => setStateDog( {dogName: e.target.value})}
            />
            <MyButton>Save</MyButton>
        </form>
        </div>
    );
};

export default FormNewAnimal;