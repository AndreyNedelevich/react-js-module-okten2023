import React, {useEffect} from 'react';
import {useFetching} from "../hooks/useFetching";
import {albumService} from "../service/album.sevice";
import {placeholderActions} from "../reducers/placeholder.reducer";
import {useDispatch, useSelector} from "react-redux";
import Error from "./Error";
import Loader from "../components/Loader/Loader";
import Albums from "../components/Alboms/Albums";

const AlbumsPage = () => {

    const dispatch = useDispatch()
    const arrAlbums = useSelector(state => state.placeholderReducer.albums)

    const [fetch, isLoading, ErrorMessage] = useFetching(
        async () => {
            const response = await albumService.getAll()
            dispatch(placeholderActions.set_AllAlbums(response.data));
        }
    );




    useEffect(() => {
        fetch()
    }, []);


    return (
        <div style={{margin: 15}} >
            <h1>Comments</h1>
            {isLoading ?
                <Loader/>
                :
                <React.Fragment>
                    {ErrorMessage ?
                        <Error error={ErrorMessage}/>
                        :
                        <Albums albums={arrAlbums}/>
                    }
                </React.Fragment>
            }
        </div>
    );
};


export default AlbumsPage;