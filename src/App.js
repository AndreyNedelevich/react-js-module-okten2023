import './App.css';
import FormNewAnimal from "./components/newAnimal/FormNewAnimal";
import Dogs from "./components/Dogs";
import React from "react";
import Cats from "./components/Cats";

function App() {


    // Використовуючи хук useReducer в якому початковый стейт буде {cats: [], dogs:[]}
    // Реалізвути збереження окремо нового кота, та окремо собаку (приклад на зображенні)
    //
    // Advance
    // реалізувати видалення для кожного при натисканні на кнопку delete


    return (
        <React.Fragment>
            <FormNewAnimal/>
            <div className='container'>
                <Cats/>
                <Dogs/>
            </div>
        </React.Fragment>
    );
}

export default App;
