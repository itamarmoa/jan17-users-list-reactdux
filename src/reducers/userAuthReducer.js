import { LOGIN_USER, LOGOUT_USER } from '../actions';


export default function userAuthReducer(state = null, action){
    switch (action.type){
        case LOGIN_USER:
            return action.user;
        case LOGOUT_USER:
            if (state){
                return null;
            }
            return state;
    }
    return state;
}