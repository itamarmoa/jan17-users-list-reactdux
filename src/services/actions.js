import * as ACTION from '../actions';
import UserService from './UserService';


export function getUsersList(){
    return dispatch =>{
        dispatch({type: ACTION.GET_USERS_LIST_REQUEST});

        UserService.getAllUsers()
            .then(users => dispatch({ type: ACTION.GET_USERS_LIST_RESPONSE, users }));
    }
}