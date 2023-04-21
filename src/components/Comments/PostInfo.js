import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";



const PostInfo = () => {

    let {Id} = useParams();
    let [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + Id)
            .then(value => value.json())
            .then(value => {
                setPost({...value});
            });
    }, [Id]);



    return (
        post &&
        <div className='postInfo'>
        <div>id: {post.id}</div>
        <div>title: {post.title}</div>
        <div>body: {post.body}</div>
    </div>

    );
};

export default PostInfo;

