import {ADD_TODO,TOGGLE_TODO} from './actions'

export const addTodo = (text) => ({
    type:ADD_TODO,
    payload: {
        text,
        id:new Date().getTime(),
        completed:false
    }
})

export const toggleTodo = (id) => ({
    type:TOGGLE_TODO,
    payload:{id}
})