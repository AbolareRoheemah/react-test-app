import postReducer from './posts';
import authReducer from './auth';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    posts: postReducer,
    auth: authReducer
})

export default allReducers