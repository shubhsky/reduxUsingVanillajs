const redux = require('redux')

// Actions
const ADD_TODO = 'Add TODO'
const TOOGLE_TODO = 'Toggle TODO'


// Action Creators
const addToDo = (text)=>({
    text,
    type:ADD_TODO
})

const toggleToDo = (index) => ({
    index,
    type:TOOGLE_TODO
})

// Initital State
const initialState = {
    todo:[]
}

// Reducer
function todoReducer(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
        
        case TOOGLE_TODO:

        default:
            return state
    }
}