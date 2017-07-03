import { ADD_USERS_LIST, ADD_USER, REMOVE_USER, SELECT_USER } from '../actions';
import { combineReducers } from 'redux';

function usersListReducer(state = [], action){
    switch (action.type){
        case ADD_USERS_LIST:
            return [...state, ...action.usersList];
        case ADD_USER:
            return [...state, action.user];
        case REMOVE_USER:
            return state.filter(user => user != action.user);
    }
    return state;
}

function selectedUserReducer(state = {}, action){
    switch (action.type){
        case SELECT_USER:
            return {details: action.user};
        case REMOVE_USER:
            return state == action.user ? null : state;
    }
    return state;
}

export default combineReducers({
    usersList: usersListReducer,
    selectedUser: selectedUserReducer
});