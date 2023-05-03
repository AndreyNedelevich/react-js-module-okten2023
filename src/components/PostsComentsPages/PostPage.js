import React from "react";
import PostInf from "./PostInf";



const PostPage = ({posts}) => {



    return (
        <div>
            {posts.map((post, index) => <PostInf key={post.id} post={post}/>)}
        </div>
    );
};

export {PostPage};



