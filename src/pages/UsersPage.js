import React, {useEffect} from 'react';
import {Users} from "../components/Users/Users";
import {useFetching} from "../hooks/useFetching";
import {userService} from "../service/user.sevice";
import {placeholderActions} from "../reducers/placeholder.reducer";
import {useDispatch, useSelector} from "react-redux";
import Error from "./Error";

const UsersPage = () => {

    const dispatch = useDispatch()
    const arrUsers = useSelector(state => state.placeholderReducer.users)

    // const [fetch, isLoading, ErrorMessage] = useFetching(
    //     async () => {
    //     userService.getAll().then(value =>value.data).then(value =>dispatch(placeholderActions.setAllUsers(value)))
    //     }
    // );


    useEffect(() => {
        userService.getAll().then(value =>value.data).then(value =>dispatch(placeholderActions.setAllUsers(value)))
    }, []);


    return (
        <div>
            <h1>Users</h1>
            {/*{isLoading &&*/}
                <React.Fragment>
                    {/*{ErrorMessage ?*/}
                    {/*    <Error error={Error}/> :*/}
                        <Users users={arrUsers}/>
                    {/*}*/}
                </React.Fragment>
            {/*}*/}
        </div>
    );
};


export default UsersPage;