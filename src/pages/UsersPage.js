import React, {useEffect} from 'react';
import {Users} from "../components/Users/Users";
import {useFetching} from "../hooks/useFetching";
import {userService} from "../service/user.sevice";
import {placeholderActions} from "../reducers/placeholder.reducer";
import {useDispatch, useSelector} from "react-redux";
import Error from "./Error";
import Loader from "../components/Loader/Loader";
import {Outlet} from "react-router-dom";


const UsersPage = () => {

    const dispatch = useDispatch()
    const {users} = useSelector(state => state.placeholder)

    const [fetch, isLoading, ErrorMessage] = useFetching(
        async () => {
            const response = await userService.getAll();
            dispatch(placeholderActions.setAll_Users(response.data));
        }
    );


    useEffect(() => {
        fetch()
    }, []);


    return (
        <div style={{margin: 15}} >
            <Outlet/>

            <h1>Users</h1>
            {isLoading ?
                <Loader/>
                :
                <React.Fragment>
                    {ErrorMessage ?
                        <Error error={ErrorMessage}/> :
                        <Users users={users}/>
                    }
                </React.Fragment>
            }
        </div>
    );
};


export default UsersPage;