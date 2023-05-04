import {createSlice} from "@reduxjs/toolkit";



const initialState={
    comments:[],
    posts:[],
    albums: [],
    todos:[],
    users:[],
    postById:null,
    postsByUser:[],
   commetsByPost:[],
}


const slice=createSlice({
    name:'placeholderSlice',
    initialState,
    reducers:{
        setAll_Users:(state,action)=>{
            state.users=action.payload
        },
        set_AllPosts:(state,action)=>{
            state.posts=action.payload
        },
        set_AllComments:(state,action)=>{
            state.comments=action.payload
        },
        set_AllAlbums:(state,action)=>{
            state.albums=action.payload
        },
        set_AllTodos:(state,action)=>{
            state.todos=action.payload
        },
        set_Post:(state,action)=>{
            state.postById=action.payload
        },
        set_PostsByUser:(state,action)=>{
            state.postsByUser=action.payload
        },
        set_CommentByPost:(state,action)=>{
            state.commetsByPost=action.payload
        },
    }
})

const {reducer:reducerPlaceholder,actions}=slice


const placeholderActions={
    ...actions
}

export {
    placeholderActions,
    reducerPlaceholder
}