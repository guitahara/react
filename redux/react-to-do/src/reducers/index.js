import todos from './todo/reducer';
import visibilityFilter from './filters/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    todos,
    visibilityFilter
})