import { ADD_USERS_LIST, ADD_USER, REMOVE_USER } from '../actions';
import { combineReducers } from 'redux';
import selectedUserReducer from './selectedUserReducer';

function usersListReducer(state = [], action){
    switch (action.type){
        case ADD_USERS_LIST:
            return [...action.usersList];
        case ADD_USER:
            return [...state, action.user];
        case REMOVE_USER:
            return state.filter(user => user != action.user);
    }
    return state;
}

export default combineReducers({
    usersList: usersListReducer,
    selectedUser: selectedUserReducer
})
