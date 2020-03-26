// Native Imports
import { combineReducers } from 'redux';

// Reducers
import auth from './authReducer'
import form from './formReducer'

export default combineReducers({
    auth,
    form
});