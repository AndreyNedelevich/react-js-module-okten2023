import React, {useEffect, useState} from 'react';
import axios from "axios";

import Todo from "./Todo";

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
            {todos.map((item)=><Todo key={item.id} todo={item}/>)}
        </div>
    );
};

export default Todos;