import React, {useState} from 'react';
import Card from "../Card/Card";
import DescriptionPost from "./DescriptionPost";
import './PostItem.css'


const PostItem = ({id,title,body}) => {

    const [showDescripsion,setShowDescripsion]=useState(false)

    return (
        <Card className="container">
            <div className="description">
                <div>
                    <h1 className='number'>id {id}</h1>
                    <h2>title: {title}</h2>
                </div>
                <button onClick={()=>{setShowDescripsion((prev => !prev))}} className='button' type='button'>Детали Поста</button>
            </div>
            {showDescripsion&&<DescriptionPost descriptionPost={body}/>}

        </Card>
    );
};

export default PostItem;