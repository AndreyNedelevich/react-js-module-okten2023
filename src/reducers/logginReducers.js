
const actionsLogTypes={
    change_IsUserLoggedIn: 'change_IsUserLoggedIn',
}


const logginInitialState={
    isUserLoggedIn: null
}


const logginActions={
    changeIsUserLoggedIn:(arg)=>({type:actionsLogTypes.change_IsUserLoggedIn,payload:arg })
}



const  logginReducer=(state=logginInitialState,action)=>{
    switch (action.type){
        case actionsLogTypes.change_IsUserLoggedIn:
            console.log(action.payload);
            return {...state, isUserLoggedIn: action.payload}
        default:
            return state
    }
}



export {
    logginReducer,
    logginActions,
}
