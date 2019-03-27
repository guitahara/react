import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
import dog from './dog/reducer';

export default combineReducers({
    dog,
    form: formReducer
})