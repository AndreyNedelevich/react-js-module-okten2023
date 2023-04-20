import React, {useEffect, useState} from 'react';
import Todo from "./Todo";
import axios from "axios";

const Todos = () => {
    const [todos,setTodos]=useState([])

    const fetchAlbums=async ()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        setTodos(response.data);
    }

    useEffect(()=>{
        fetchAlbums()
    },[])


    return (
        <div>
            {todos.map((item,id)=><Todo key={item.id} todo={item}/>)}
        </div>
    );
};

export default Todos;