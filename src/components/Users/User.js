
import Card from "../Card/Card";



const User = ({id,username,name,email,showPostUser}) => {

    return (
        <Card  className="container">
                <div className="description description_body">
                    <div>id:  {id}</div>
                    <div>name:  {name}</div>
                    <div>username: {username}</div>
                    <div>email: {email}</div>
                <button onClick={()=>{showPostUser(id)}} className='button' type='button'>Посты {name}</button>
            </div>
        </Card>
    );
};

export default User;