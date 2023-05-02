import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    let navigate = useNavigate();

    return (
        <div>
            {post.id} {post.title}

            <button onClick={() => {
                navigate(post.id.toString(),{state:{...post}});
            }}>details of post
            </button>
        </div>
    );
};

export default Post;