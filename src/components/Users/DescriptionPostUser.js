import React from 'react';
import Card from "../Card/Card";


const DescriptionPostUser = ({postsUser}) => {
    return (
        <div>
            {postsUser.map(post =>
                <Card className="wrapperPosts" key={post.id}>
                    <h2><i>id: </i> {post.id}</h2>
                    <h2><i>title:</i> {post.title}</h2>
                    <p className='title'> <strong><i>description:</i></strong> {post.body}</p>
                </Card>
            )}
        </div>
    );
};

export default DescriptionPostUser;