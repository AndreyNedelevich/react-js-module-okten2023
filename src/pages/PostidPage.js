import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useFetching} from "../hooks/useFetching";
import {PostPage} from "../components/PostidComentsPages/PostPage";
import {postService} from "../service/post.service";
import {placeholderActions} from "../reducers/placeholder.reducer";
import Loader from "../components/Loader/Loader";
import Error from "./Error";
import {commentService} from "../service/comment.sevice";



const PostidPage = () => {
    const {id} = useParams()
const  {state} = useLocation()

    const dispatch = useDispatch()

    const {postsByUser,commetsByPost}= useSelector(state => state.placeholderReducer)


    const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await postService.getByIdPostsUser(id.toString());
        dispatch(placeholderActions.set_PostsByUser(response.data));
    })

    const [fetchComentssById, isLoadingComents, errorComents] = useFetching(async (id) => {
        const response = await commentService.getByIdCommentsPost(id.toString());
        dispatch(placeholderActions.set_CommentByPost(response.data));
    })


    useEffect(() => {
        fetchPostsById(id)
        fetchComentssById(id)
    }, [id])



    let isPostsandComments=postsByUser.length!==0&&commetsByPost!==0



   if(isPostsandComments) {
       for(const post of postsByUser ){
           post.comment=[];
           for(const comment of commetsByPost )
           if(post.id===comment.postId){
               post.comment.push(comment)
           }
       }
   }


    return (
        isPostsandComments &&
        <div>
            <h2>Вы открыли страницу постов Пользователя: {state.name}</h2>
            {isLoading
                ? <Loader/>
                :
                <React.Fragment>
                    {error ?
                        <Error error={error}/> :
                        <PostPage postsComments={postsByUser}/>
                    }
                </React.Fragment>
            }
        </div>
    );
};

export default PostidPage;