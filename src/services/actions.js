import * as ACTION from '../actions';
import UserService from './UserService';


export function getUsersList(){
    return dispatch =>{
        dispatch({type: ACTION.GET_USERS_LIST_REQUEST});

        UserService.getAllUsers()
            .then(users => dispatch({ type: ACTION.GET_USERS_LIST_RESPONSE, users }));
    }
}

export function getUserDetails(userId) {
    return dispatch =>{
        dispatch({type: ACTION.GET_USER_DETAILS_REQUEST});

        UserService.getUser(userId)
            .then(user => dispatch({type: ACTION.GET_USER_DETAILS_RESPONSE, user}));
    }
}

export function getUserPosts(userId) {
    return userId;
}