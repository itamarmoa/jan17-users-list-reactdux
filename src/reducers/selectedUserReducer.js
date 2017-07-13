import { ADD_USERS_LIST, ADD_USER, REMOVE_USER, SELECT_USER, GET_USER_DETAILS_REQUEST, GET_USER_DETAILS_RESPONSE} from '../actions';
import { combineReducers } from 'redux';

function detailsReducer(state = null, action){
    switch (action.type){
        case GET_USER_DETAILS_RESPONSE:
            return action.user;
        // case SELECT_USER:
        //     return action.user;
        case REMOVE_USER:
            return state == action.user ? null : state;
    }
    return state;
}

function postsReducer(state = null, action){
    return state;
}

function isUserLoadingReducer(state = false, action) {
    switch (action.type){
        case GET_USER_DETAILS_REQUEST:
            return true
        case GET_USER_DETAILS_RESPONSE:
            return false
    }
    return state;
}

export default combineReducers({
    details: detailsReducer,
    posts: postsReducer,
    isUserLoading: isUserLoadingReducer
})