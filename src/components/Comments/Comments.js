import React, {useEffect, useState} from 'react';
import axios from "axios";

import Comment from "./Comment";
import {Outlet} from "react-router-dom";

const Comments = () => {

    const[comments,setComments]=useState([]);


    const fetchAlbums=async ()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
        setComments(response.data);
    }

    useEffect(()=>{
        fetchAlbums()
    },[])
    return (
        <div>
            <Outlet/>
        <div className='block'>
            {comments.map((item)=><Comment key={item.id} comment={item}/>)}
        </div>
        </div>
    );
};

export default Comments;
