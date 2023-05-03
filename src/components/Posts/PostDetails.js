import {useLocation} from "react-router-dom";

const PostDetails = () => {
    const {state}=useLocation()


    return (
        <div className='block'>
            <h1>Информация о Посте:  {state.title}</h1>
            <div>
                <div><strong>id</strong> : {state.id}</div>
                <div><strong>title:</strong> {state.title}</div>
                <div><strong>body:</strong>  {state.body}</div>
            </div>
        </div>
    );
};

export default PostDetails;