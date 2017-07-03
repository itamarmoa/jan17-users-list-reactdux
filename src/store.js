import {createStore} from 'redux';
import appReducers from './reducers'

const state = {
    loggedInUser: null,
    friends: {
        usersList: [],
        selectedUser: {}
    }
};

export default createStore(
    appReducers,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);