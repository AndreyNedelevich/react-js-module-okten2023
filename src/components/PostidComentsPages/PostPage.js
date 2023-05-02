import React from "react";





const PostPage = ({postsComments}) => {

    // const content=postsComments.map(item=>{
    //
    //
    // })



    return (
        <div>
            {postsComments.map((post)=>{
                <div key={post.id}>
                    <h3>{post.id}. {post.title}</h3>
                    <div>{post.body}</div>
                </div>
                if(post==='objects'){
                }
            }
            )}
        </div>
    );
};

export {PostPage};