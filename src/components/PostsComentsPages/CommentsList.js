import React from 'react';


const CommentsList = ({comments}) => {


    return (
        <React.Fragment>
            {comments.map(comment =>
                <div key={comment.id} style={{margin: 15}}>
                    <h3>{comment.name}</h3>
                    <h5>{comment.email}</h5>
                    <div>{comment.body}</div>
                </div>
            )}
        </React.Fragment>
    );
};


export default CommentsList;