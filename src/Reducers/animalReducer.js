const animalActionTypes = {
    AddDog: 'AddDog',
    AddCat: 'AddCat',
    RemoveDog: 'RemoveDog',
    RemoveCat: 'RemoveCat',
}


const animalActions = {
    AddDog:(dog)=>({type:animalActionTypes.AddDog, payload:dog}),
    AddCat:(cat)=>({type:animalActionTypes.AddCat, payload:cat}),
    RemoveDog:(id)=>({type:animalActionTypes.RemoveDog, payload:id}),
    RemoveCat:(id)=>({type:animalActionTypes.RemoveCat, payload:id}),
}
const animalInitialState = {
    dogs:[],
    cats:[]
}
const animalReducer = (state, action) => {
    switch (action.type) {
        case animalActionTypes.AddDog:
            return {...state, dogs: action.payload}
        case animalActionTypes.AddCat:
            return {...state, cats: action.payload}
        case animalActionTypes.RemoveDog:{
        let updatedItems =    state.dogs.filter((item) => item.id !== action.id)
            return {...state, dogs: updatedItems}
        }
            case animalActionTypes.RemoveCat:{
            let updatedItems =    state.cats.filter((item) => item.id !== action.id)
            return {...state, dogs: updatedItems}
        }
        default:
            return state
    }
}

export {
    animalActions,
    animalInitialState,
    animalReducer
}
