import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    let navigate = useNavigate();

    return (
        <div>
            {post.id} {post.title}

            <button onClick={() => {
                navigate(post.id.toString(),{state:{...post}});
            }}>Детали Поста
            </button>
        </div>
    );
};

export default Post;