import Comment from "./Comment";


const Comments = ({comments}) => {

    return (
        <div>
            <div className='block'>
                {comments.map((item)=><Comment key={item.id} comment={item}/>)}
            </div>
        </div>
    );
};

export default Comments;