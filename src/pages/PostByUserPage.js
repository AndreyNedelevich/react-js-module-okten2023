import React, {useEffect} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useFetching} from "../hooks/useFetching";
import {PostPage} from "../components/PostsComentsPages/PostPage";
import {postService} from "../service/post.service";
import {placeholderActions} from "../reducers/placeholder.reducer";
import Loader from "../components/Loader/Loader";
import Error from "./Error";




const PostByUserPage = () => {
    const {id} = useParams()
const  {state} = useLocation()
   const navigate= useNavigate()

    const dispatch = useDispatch()

    const postsByUser= useSelector(state => state.placeholder.postsByUser)


    const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await postService.getByIdPostsUser(id.toString());
        dispatch(placeholderActions.set_PostsByUser(response.data));
    })


    useEffect(() => {
        fetchPostsById(id)

    }, [id])



    let isPostsandComments=postsByUser.length!==0





    return (
        isPostsandComments &&
        <div>
            <button onClick={()=>{navigate(-1)}}>Вернуться на предыдущую страницу</button>
            <h2>Вы открыли страницу постов Пользователя: {state.name}</h2>
            {isLoading
                ? <Loader/>
                :
                <div className='block'>
                    {error ?
                        <Error error={error}/> :
                        <PostPage posts={postsByUser}/>
                    }
                </div>
            }
        </div>
    );
};

export default PostByUserPage;