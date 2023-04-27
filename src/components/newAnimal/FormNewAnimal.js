import React, {useContext} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import {useAppReducer} from "../../hooks/useAppReducer";
import {animalActions} from "../../Reducers/animalReducer";
import {StateContext} from "../../store/Provider";
import {useState} from "react";


const FormNewAnimal = () => {

    // const [, dispatche] = useAppReducer(state => state.animals)

    const ctx=useContext(StateContext);
    console.log(ctx)

    // console.log(useAppReducer(state => state.animals))

    const [state, setState] = useState({
        inputCat: "",
        inputDog: "",
    });


    const save = (e) => {
        e.preventDefault()
        if (state.inputCat !== "") {
            // dispatche(animalActions.AddCat(state.inputCat))
            console.log(state.inputCat);
            // setState(state.inputCat)
        }
        if (state.inputDog !== "") {
            // dispatche(animalActions.AddCat(state.inputDog))
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
                value={state.inputCat}
                id="cat"
                onChange={(e) => setState({...state, inputCat: e.target.value})}
            />
            <MyButton>Save</MyButton>
            <MyInput
                type="text"
                label="Add Dog:"
                value={state.inputDog}
                onChange={(e) => setState({...state, inputDog: e.target.value})}
            />
            <MyButton>Save</MyButton>
        </form>
    );
};

export default FormNewAnimal;