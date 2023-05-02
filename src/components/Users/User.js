
import {useNavigate} from 'react-router-dom';



const User = ({user}) => {
    const navigate = useNavigate();
    const {id, name} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={()=>navigate(`${id}`, {state:{...user}})}>User Details</button>
            <button onClick={()=>navigate(`${id}/posts`, {state:{...user}})}>Posts Users</button>
        </div>
    );
};

export {User};