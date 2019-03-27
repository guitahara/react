import {ADD_DOG,EDIT_DOG,SEARCH_DOG,SEARCH_DOG_BY_ID,REMOVE_DOG, UPDATE_DOG_INFO} from './actions'
const INITIAL_STATE = {
    list: [],
    dog: {
        name:'',
        race:'',
        age:0,
        color:'',
        size:''
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SEARCH_DOG:
            return {...state, list: action.payload}
        case ADD_DOG:
            return {...state, list:action.payload}
        case EDIT_DOG:
            return {...state,list:action.payload}
        case REMOVE_DOG:
            return {...state,list:action.payload}
        case SEARCH_DOG_BY_ID:
            return {...state,dog:action.payload}
        case UPDATE_DOG_INFO:
            return {...state,dog:action.payload}
        default:
            return state
    }
}