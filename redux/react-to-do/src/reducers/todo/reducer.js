import {ADD_TODO,TOGGLE_TODO} from './actions';
import createReducer  from '../create-reducer';

export const initialState = []

export default createReducer(initialState, {
    [ADD_TODO]: (state, action) => 
        state.concat({
            id: action.payload.id,
            text: action.payload.text,
            completed:false
    }),
    [TOGGLE_TODO]: (state,action) => {return state.map(todo => {
                        if(todo.id !== action.payload.id){
                            return  todo
                        }
                        return({
                            ...todo,
                            completed: todo.id === action.payload.id ? !todo.completed: todo.completed
                        })
                    })}
})