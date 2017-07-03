import * as ACTION from '../actions';

export function addUsersList(usersList){
    return { type: ACTION.ADD_USERS_LIST, usersList };
}
export function selectUser(user) {
    return {type: ACTION.SELECT_USER, user};
}
export function addUser(user) {
    return {type: ACTION.ADD_USER, user};
}
export function removeUser(user) {
    return {type: ACTION.REMOVE_USER, user};
}
export function loginUser(user){
    return {type: ACTION.LOGIN_USER, user};
}
export function logoutUser(){
    return {type: ACTION.LOGOUT_USER};
}