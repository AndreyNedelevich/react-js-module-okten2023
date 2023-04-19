import React, { useState} from 'react';
import User from "./User";
import DescriptionPostUser from "./DescriptionPostUser";
import PostService from "../../service/PostService";


const UserList = ({users}) => {
    const [postsUser,setUserPosts]= useState([])
    const [isShowPosts,setIsShowPosts]=useState(false)


    const showPostUser=async (id)=> {
        if(id!==null&&id!==undefined){
            const response = await PostService.getPostsById(id);
            setUserPosts([ ...response.data])
            setIsShowPosts(true)
        }
    }

    return (
        <div className='wraper'>
            {users.map(user => (
                <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    showPostUser={showPostUser}
                />
            ))}
            { isShowPosts &&  <DescriptionPostUser postsUser={postsUser}/>}
        </div>
    );
};

export default UserList