import {SET_VISIVILITY_FILTER,SHOW_ALL} from './actions';

export const initialState = SHOW_ALL;

export default (state=initialState, action) => {
    switch(action.type) {
        case SET_VISIVILITY_FILTER: 
            return action.payload.filter
    }
    return state
}

