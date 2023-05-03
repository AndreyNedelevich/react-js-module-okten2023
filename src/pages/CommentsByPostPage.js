import React, {useEffect} from 'react';
import {useFetching} from "../hooks/useFetching";
import {commentService} from "../service/comment.sevice";
import {placeholderActions} from "../reducers/placeholder.reducer";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Error from "./Error";
import CommentsList from "../components/PostsComentsPages/CommentsList";

const CommentsByPostPage = () => {
    const {id} = useParams()
    const  {state} = useLocation()
    const dispatch = useDispatch()
    const navigate=useNavigate()

    console.log(state);
    const commentsByPost= useSelector(state => state.placeholderReducer.commetsByPost)



    const [fetchComentssById, isLoadingComents, errorComents] = useFetching(async (id) => {
        const response = await commentService.getByIdCommentsPost(id.toString());
        dispatch(placeholderActions.set_CommentByPost(response.data));
    })


    useEffect(() => {
        fetchComentssById(id)
    }, [id])



    let content = ''

    if (isLoadingComents) {
        content = <Loader/>;
    }

    if (commentsByPost !== null && commentsByPost !== undefined && commentsByPost.length > 0) {
        content = <CommentsList comments={commentsByPost}/>;
    }

    if (errorComents) {
        content = <Error>{errorComents}</Error>;
    }



    return (
            <div style={{margin: 15}} >
                <button onClick={()=>{navigate(-1)}}>Вернуться на предыдущую страницу</button>
                <h2>Вы открыли комметарии поста </h2>
                <div className='block'>
                <h3>"{state.title}"</h3>
                <h4> {state.body}</h4>
                </div>

                <h1 style={{marginTop: 15}}>
                    Комментарии
                </h1>
                <section className='block'>
                {content}
                </section>
            </div>
    );
};

export default CommentsByPostPage;