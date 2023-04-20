import React, {useEffect, useState} from 'react';
import Album from "./Album";
import axios from "axios";

const Albums = () => {
const [albums,setAlbums]=useState([])

    const fetchAlbums=async ()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
        setAlbums(response.data);
    }

    useEffect(()=>{
   fetchAlbums()
    },[])


    return (
        <div>
            {albums.map((item,id)=><Album key={item.id} album={item}/>)}
        </div>
    );
};

export default Albums;