import {combineReducers} from 'redux';
import friendsReducer from './friendsReducer';
import userAuthReducer from './userAuthReducer';
import selectedUserReducer from './selectedUserReducer';


export default combineReducers({
    friends: friendsReducer,
    loggedInUser: userAuthReducer
});