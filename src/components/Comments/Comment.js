import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
// import PostInfo from "./PostInfo";

const Comment = ({comment}) => {

    const [showPost, setShowPost] = useState(false)
    let [post, setPost] = useState(null);

    const {postId, idComment, name, email, body} = comment

    const click = () => {
        setShowPost(true)
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(value => value.json())
            .then(value => {
                if (showPost) setPost({...value})
            })
    }

//     useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
//         .then(value => value.json())
//         .then(value => {
//             if(showPost){setPost({...value});}
//
//         });
// }, [showPost])


    return (
        <div>
            <div className='wrapper'>
                <div>id: {idComment}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
                <button onClick={click}>Открыть</button>
            </div>
            {showPost &&
                <div>
                    <div>id: {post.id}</div>
                    <div>name: {post.name}</div>
                    <div>email: {post.email}</div>
                    <div>body: {post.body}</div>
                </div>}
        </div>
    );
}

export default Comment;