import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";



const PostInfo = () => {

    let {postId} = useParams();
    let [post, setPost] = useState(null);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(value => value.json())
            .then(value => {
                setPost({...value});
            });
    }, [postId]);



    return (
        post &&
        <div>
        <div>id: {post.id}</div>
        <div>name: {post.name}</div>
        <div>email: {post.email}</div>
        <div>body: {post.body}</div>
    </div>

    );
};

export default PostInfo;

