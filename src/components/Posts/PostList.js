import React from 'react';
import PostItem from "./PostItem";
import './PostList.css'



const PostList = ({arrayPosts}) => {


    return (
        <div className='wraper'>
            {arrayPosts.map(item => (
                <PostItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    body={item.body}
                />
            ))}
        </div>
    );
};

export default PostList