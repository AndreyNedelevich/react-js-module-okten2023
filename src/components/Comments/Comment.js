import {useNavigate} from "react-router-dom";


const Comment = ({comment}) => {

    let navigate = useNavigate();
    const {postId, id, name, email, body} = comment

    return (
        <div >
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={()=>{
                navigate(`${postId}`);
            }}>Открыть текущий пост</button>
        </div>
    );
}

export default Comment;