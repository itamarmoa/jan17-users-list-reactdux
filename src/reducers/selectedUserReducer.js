import { ADD_USERS_LIST, ADD_USER, REMOVE_USER, SELECT_USER } from '../actions';
import { combineReducers } from 'redux';

function detailsReducer(state = null, action){
    switch (action.type){
        case SELECT_USER:
            return action.user;
        case REMOVE_USER:
            return state == action.user ? null : state;
    }
    return state;
}

function postsReducre(state = null, action){
    return state;
}

export default combineReducers({
    details: detailsReducer,
    posts: postsReducre
})