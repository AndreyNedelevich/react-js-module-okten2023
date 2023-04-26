import React from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import {useAppReducer} from "../../hooks/useAppReducer";
import {animalActions} from "../../Reducers/animalReducer";
import {useState} from "react";


const FormNewAnimal = () => {

    const [state2, dispatche] = useAppReducer(state => state.animals)

    const [state, setState] = useState({
        inputCat: "",
        inputDog: "",
    });


    const save = (item) => {
        if (state.inputCat !== "") {
            dispatche(animalActions.AddCat(state.inputCat))
            console.log(state.inputCat);
            setState(state.inputCat)
        }
        if (state.inputDog !== "") {
            dispatche(animalActions.AddCat(state.inputDog))
            console.log(state.inputDog);
        }
        setState({
            inputCat: "",
            inputDog: ""
        })
    }

    return (
        <form onSubmit={save}>
            <MyInput
                type="text"
                label="Add Cat:"
                value={state}
                id="cat"
                onChange={(e) => setState({...state, inputCat: e.target.value})}
            />
            <MyButton>Save</MyButton>
            <MyInput
                type="text"
                label="Add Dog:"
                value={state}
                onChange={(e) => setState({...state, inputDog: e.target.value})}
            />
            <MyButton>Save</MyButton>
        </form>
    );
};

export default FormNewAnimal;