import Post from "./Post";


const Posts = ({posts}) => {

    return (
        <div className='block'>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};