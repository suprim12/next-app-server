import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { userReducer } from './userReducer';
import { postReducer } from './postReducer';
import { themeReducer } from './themeReducer';

export default combineReducers({
    auth: authReducer,
    profile: userReducer,
    posts: postReducer,
    theme: themeReducer
});