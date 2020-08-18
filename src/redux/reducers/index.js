import { combineReducers } from 'redux'
import { signin } from './UserReducer';
import { loadchat } from './ChatReducer';
export const rootReducer = combineReducers({
    userState: signin,
    chatState: loadchat
})

