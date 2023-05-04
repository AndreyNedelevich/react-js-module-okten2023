import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {postService} from "../../service/post.service";
import {useSelector, useDispatch} from "react-redux";
import {useFetching} from "../../hooks/useFetching";
import {placeholderActions} from "../../reducers/placeholder.reducer";
import Loader from "../Loader/Loader";

const PostInform = () => {
    const {postId} = useParams();
    const post = useSelector(state => state.placeholder.postById)
    const dispatch = useDispatch()


    const [fetch, isLoading, ErrorMessage] = useFetching(
        async () => {
            const response = await postService.getByidPost(postId);
            dispatch(placeholderActions.set_Post(response.data));
        }
    );


    useEffect(() => {
        fetch()
    }, [postId]);


    return (
        <div className='block'>
            {post &&
                <React.Fragment>
                    {isLoading ?
                        <Loader/>
                        :
                        <div>
                            <h1>Информация о Посте: {post.title}</h1>
                            <div>id: {post.id}</div>
                            <div>title: {post.title}</div>
                            <div>body: {post.body}</div>
                        </div>}
                </React.Fragment>
            }
        </div>
    );
};

export {PostInform};