import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetails = () => {

    let {state} = useLocation();
    //При помощи данного хука мы имеем возможность вытянуть все данные User которые мы передаем JSX коде при помощи state

    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
};

export default UserDetails;
