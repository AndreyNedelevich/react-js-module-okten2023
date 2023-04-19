import React from 'react';
import './DescriptionPost.css'

const DescriptionPost = ({descriptionPost}) => {

    return (
        <div className='description_body'>
        <h2 className='number'>BODY</h2>
        <div >
            {descriptionPost}
        </div>
        </div>
    );
};

export default DescriptionPost;