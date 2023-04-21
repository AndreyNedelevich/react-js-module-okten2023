import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import Post from "../post/Post";
const Posts = () => {

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value]);
            });

    }, [])

    return (
        <div>


            <div>
                <h3>All posts</h3>

                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }

            </div>

            <div>
                <h4>post details view</h4>
                <Outlet/>


            </div>
        </div>
    );
};

export default Posts;
