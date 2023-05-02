import {useLocation} from "react-router-dom";

const UserDetails = () => {
    const {state}=useLocation()


    return (
        <div className='postInfo'>
            <h1>Информация о пользователе  {state.name}</h1>
            <div>
                <div>id: {state.id}</div>
                <div>name: {state.name}</div>
                <div>username: {state.username}</div>
                <div>email: {state.email}</div>
            </div>
        </div>
    );
};

export default UserDetails;