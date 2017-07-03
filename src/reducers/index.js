import {combineReducers} from 'redux';
import friendsReducer from './friendsReducer';
import userAuthReducer from './userAuthReducer';


export default combineReducers({
    friends: friendsReducer,
    loggedInUser: userAuthReducer
});