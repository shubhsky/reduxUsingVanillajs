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
    todos:[]
}

// Reducer - must be pure function
// must return updated state if they are updating the state
function todoReducer(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed:false
                    }
                ]
            }
        
        case TOOGLE_TODO:
            return {
                ...state,
                todos:state.todos.map((todo,i)=>{
                    if(i === action.index){
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }

        default:
            return state
    }
}

// Creating store
const store = redux.createStore(todoReducer);

// dispatch actions..
store.dispatch(addToDo('Study at 8'));
store.dispatch(addToDo('Office at 9'));
store.dispatch(toggleToDo(0));
store.dispatch(addToDo('gym at 6'));

// read data from store - selectors
console.log(store.getState());