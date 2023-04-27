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
            const dog = action.payload;
            dog.id=state.dogs.length+1;
            return {...state, dogs:[...state.dogs, dog]}
        case animalActionTypes.AddCat:
            const cat = action.payload;
            cat.id=state.cats.length+1;
            return {...state, cats:[...state.cats, cat]}
        case animalActionTypes.RemoveDog:
        let updatedItemDog =    state.dogs.filter((item) => item.id !== action.payload)
            return {...state, dogs: updatedItemDog}
            case animalActionTypes.RemoveCat:
            let updatedItemCat =    state.cats.filter((item) => item.id !== action.payload)
            return {...state, cats: updatedItemCat}

        default:
            return state
    }
}

export {
    animalActions,
    animalInitialState,
    animalReducer
}
