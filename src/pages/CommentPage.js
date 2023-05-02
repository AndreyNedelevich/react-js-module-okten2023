import React, {useEffect} from 'react';
import {useFetching} from "../hooks/useFetching";
import {commentService} from "../service/comment.sevice";
import {placeholderActions} from "../reducers/placeholder.reducer";
import {useDispatch, useSelector} from "react-redux";
import Error from "./Error";
import Loader from "../components/Loader/Loader";
import Comments from "../components/Comments/Comments";
import {Outlet} from "react-router-dom";


const CommentsPage = () => {

    const dispatch = useDispatch()
    const arrComments = useSelector(state => state.placeholderReducer.comments)

    const [fetch, isLoading, ErrorMessage] = useFetching(
        async () => {
            const response = await commentService.getAll();
            dispatch(placeholderActions.set_AllComments(response.data));
        }
    );


    useEffect(() => {
        fetch()
    }, []);


    return (
        <div>
            <Outlet/>
            <h1>Comments</h1>
            {isLoading ?
                <Loader/>
                :
                <React.Fragment>
                    {ErrorMessage ?
                        <Error error={ErrorMessage}/> :
                        <Comments comments={arrComments}/>
                    }
                </React.Fragment>
            }
        </div>
    );
};


export default CommentsPage;