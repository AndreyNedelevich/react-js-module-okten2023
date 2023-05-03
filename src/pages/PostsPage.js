import React, {useEffect} from 'react';
import {useFetching} from "../hooks/useFetching";
import {postService} from "../service/post.service";
import {placeholderActions} from "../reducers/placeholder.reducer";
import {useDispatch, useSelector} from "react-redux";
import Error from "./Error";
import Loader from "../components/Loader/Loader";
import {Posts} from "../components/Posts/Posts";
import {Outlet} from "react-router-dom";

const PostsPage = () => {

    const dispatch = useDispatch()
    const arrPosts = useSelector(state => state.placeholderReducer.posts)

    const [fetch, isLoading, ErrorMessage] = useFetching(
        async () => {
            const response = await postService.getAll();
            dispatch(placeholderActions.set_AllPosts(response.data));
        }
    );


    useEffect(() => {
        fetch()
    }, []);


    return (
        <div style={{margin: 15}} >
            <Outlet/>
            <h1>Posts</h1>
            {isLoading ?
                <Loader/>
                :
                <React.Fragment>
                    {ErrorMessage ?
                        <Error error={ErrorMessage}/> :
                        <Posts posts={arrPosts}/>
                    }
                </React.Fragment>
            }
        </div>
    );
};


export default PostsPage;