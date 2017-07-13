import {createStore, applyMiddleware} from 'redux';
import appReducers from './reducers'
import LoginService from './services/LoginService';
import Thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const state = {
    loggedInUser: LoginService.get(),
    friends: {
        usersList: [],
        selectedUser: {
            details: null,
            posts: [

            ],
            isUserLoading: false
        },
        isUsersListLoading: false,
    }
};

let middlewares = applyMiddleware(Thunk);

export default createStore(
    appReducers,
    state,
    composeWithDevTools(middlewares)
);