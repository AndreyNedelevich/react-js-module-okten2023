
const actionTypes={
    set_AllUsers:'set_AllUsers',
    set_AllPosts:'set_AllPosts',
    set_AllComments:'set_AllComments',
    set_AllTodos:'set_AllTodos',
    set_AllAlboms:'set_AllAlboms',
    set_User:'set_User',
    set_Post:'set_Post',
    set_Comment:'set_Comment',
    change_IsLoading:'change_IsLoading',
    change_IsUserLoggedIn: 'change_IsUserLoggedIn',
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
    isUserLoggedIn: null
}


const placeholderActions={
    setAllUsers:(users)=>({type:actionTypes.set_AllUsers,payload:users}),
    set_AllPosts:(posts)=>({type:actionTypes.set_AllPosts,payload:posts}),
    set_AllAlboms:(alboms)=>({type:actionTypes.set_AllAlboms,payload:alboms}),
    set_AllTodos:(todos)=>({type:actionTypes.set_AllUsers,payload:todos}),
    set_AllComments:(comments)=>({type:actionTypes.set_AllComments,payload:comments}),
    set_User:(id)=>({type:actionTypes.showCommentById,payload:id}),
    set_Post:(post)=>({type:actionTypes.set_AllPosts,payload:post}),
    set_Comment:(comment)=>({type:actionTypes.set_AllPosts,payload:comment}),
    change_IsLoading:(arg)=>({type:actionTypes.set_AllPosts,payload:arg}),
    changeIsUserLoggedIn:(arg)=>({type:actionTypes.set_AllPosts,payload:arg })

}



const placeholderReducer=(state=placeholderInitialState,action)=>{
    switch (action.type){
        case placeholderInitialState.set_AllUsers:
            return {...state, users: action.payload}
        case placeholderInitialState.set_AllPosts:
            return {...state, posts: action.payload}
        case placeholderInitialState.set_AllComments:
            return {...state, comments: action.payload}
        case placeholderInitialState.set_AllAlboms:
            return {...state, alboms: action.payload}
        case placeholderInitialState.set_AllTodos:
            return {...state, todos: action.payload}
        case placeholderInitialState.set_User:
            return {...state, showUserById: action.payload}
        case placeholderInitialState.set_Post:
            return {...state, showUserById: action.payload}
        case placeholderInitialState.set_Comment:
            return {...state, showUserById: action.payload}
        case placeholderInitialState.isLoading:
            return {...state, isLoading: action.payload}
        case placeholderInitialState.isUserLoggedIn:
            return {...state, isUserLoggedIn: action.payload}
        default:
            return state
    }
}


export {
    placeholderReducer,
    placeholderActions,
    placeholderInitialState
}
