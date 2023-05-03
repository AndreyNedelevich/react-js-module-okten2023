import React from 'react';
import {useNavigate} from "react-router-dom";

const PostInf = ({post}) => {
   const navigate = useNavigate()


    return (
        <div>
            <h3>{post.id}. {post.title}</h3>
            <div>{post.body}</div>
            <button onClick={()=>navigate(`/post/${post.id}/comments`, {state:{...post}})}>Комментарии Поста</button>
        </div>
    );
};

export default PostInf;