import { ADD_USER, REMOVE_USER, GET_USERS_LIST_REQUEST, GET_USERS_LIST_RESPONSE } from '../actions';
import { combineReducers } from 'redux';
import selectedUserReducer from './selectedUserReducer';

function usersListReducer(state = [], action){
    switch (action.type){
        case GET_USERS_LIST_RESPONSE:
            return [...action.users];
        case ADD_USER:
            return [...state, action.user];
        case REMOVE_USER:
            return state.filter(user => user != action.user);
    }
    return state;
}

function isUsersListLoadingReducer(state = false, action){
    switch (action.type){
        case GET_USERS_LIST_REQUEST:
            return true;
        case GET_USERS_LIST_RESPONSE:
            return false;
    }
    return state;
}


export default combineReducers({
    usersList: usersListReducer,
    selectedUser: selectedUserReducer,
    isUsersListLoading: isUsersListLoadingReducer
})
