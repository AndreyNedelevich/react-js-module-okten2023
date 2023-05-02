
const actionTypes={
    set_AllUsers:'set_AllUsers',
    set_AllPosts:'set_AllPosts',
    set_AllComments:'set_AllComments',
    set_AllTodos:'set_AllTodos',
    set_AllAlboms:'set_AllAlboms',
    set_User:'set_User',
    set_Post:'set_Post',
    set_Comment:'set_Comment',
    error:'change_IsLoading',
}


const placeholderInitialState={
    comments:[],
    posts:[],
    alboms: [],
    todos:[],
    users:[],
    showCommentById:null,
    showPostById:null,
    showUserById:null,
    isLoading:null,
}


const placeholderActions={
    setAllUsers:(users)=>({type:actionTypes.set_AllUsers,payload:users}),
    set_AllPosts:(posts)=>({type:actionTypes.set_AllPosts,payload:posts}),
    set_AllAlboms:(alboms)=>({type:actionTypes.set_AllAlboms,payload:alboms}),
    set_AllTodos:(todos)=>({type:actionTypes.set_AllUsers,payload:todos}),
    set_AllComments:(comments)=>({type:actionTypes.set_AllComments,payload:comments}),
    set_User:(id)=>({type:actionTypes.set_User,payload:id}),
    set_Post:(post)=>({type:actionTypes.set_Post,payload:post}),
    set_Comment:(comment)=>({type:actionTypes.set_Comment,payload:comment}),
    change_IsLoading:(arg)=>({type:actionTypes.change_IsLoading,payload:arg}),
}



const placeholderReducer=(state=placeholderInitialState,action)=>{
    switch (action.type){
        case actionTypes.set_AllUsers:
            return {...state, users: action.payload}
        case actionTypes.set_AllPosts:
            return {...state, posts: action.payload}
        case actionTypes.set_AllComments:
            return {...state, comments: action.payload}
        case actionTypes.set_AllAlboms:
            return {...state, alboms: action.payload}
        case actionTypes.set_AllTodos:
            return {...state, todos: action.payload}
        case actionTypes.set_User:
            return {...state, showUserById: action.payload}
        case actionTypes.set_Post:
            return {...state, showPostById: action.payload}
        case actionTypes.set_Comment:
            return {...state, showCommentById: action.payload}
        case actionTypes.isLoading:
            return {...state, change_IsLoading: action.payload}
        default:
            return state
    }
}



export {
    placeholderReducer,
    placeholderActions
}
