
const actionTypes={
    set_AllUsers:'set_AllUsers',
    set_AllPosts:'set_AllPosts',
    set_AllComments:'set_AllComments',
    set_AllTodos:'set_AllTodos',
    set_AllAlbums:'set_AllAlbums',
    set_Post:'set_Post',

    set_PostsByUser:'set_PostsByUser',
    set_CommentsByPost:'set_CommentsByPost',
}


const placeholderInitialState={
    comments:[],
    posts:[],
    albums: [],
    todos:[],
    users:[],
    postById:null,

    postsByUser:[],
   commetsByPost:[],
}


const placeholderActions={
    setAllUsers:(users)=>({type:actionTypes.set_AllUsers,payload:users}),
    set_AllPosts:(posts)=>({type:actionTypes.set_AllPosts,payload:posts}),
    set_AllAlbums:(albums)=>({type:actionTypes.set_AllAlbums,payload:albums}),
    set_AllTodos:(todos)=>({type:actionTypes.set_AllTodos,payload:todos}),
    set_AllComments:(comments)=>({type:actionTypes.set_AllComments,payload:comments}),
    set_Post:(post)=>({type:actionTypes.set_Post,payload:post}),

    set_PostsByUser:(postsArr)=>({type:actionTypes.set_PostsByUser,payload:postsArr}),
    set_CommentByPost:(commentsArr)=>({type:actionTypes.set_CommentsByPost,payload:commentsArr}),
}



const placeholderReducer=(state=placeholderInitialState,action)=>{
    switch (action.type){
        case actionTypes.set_AllUsers:
            return {...state, users: action.payload}
        case actionTypes.set_AllPosts:
            return {...state, posts: action.payload}
        case actionTypes.set_AllComments:
            return {...state, comments: action.payload}
        case actionTypes.set_AllAlbums:
            return {...state, albums: action.payload}
        case actionTypes.set_AllTodos:
            return {...state, todos: action.payload}
        case actionTypes.set_Post:
            return {...state, postById: action.payload}
        case actionTypes.set_PostsByUser:
            return {...state, postsByUser: action.payload}
        case actionTypes.set_CommentsByPost:
            return {...state, commetsByPost: action.payload}
        default:
            return state
    }
}



export {
    placeholderReducer,
    placeholderActions
}
