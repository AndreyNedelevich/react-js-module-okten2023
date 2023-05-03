
 import {User} from './User';


const Users = ({users}) => {



    return (
        <div className='block'>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};