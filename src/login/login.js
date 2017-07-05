import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {loginUser, logoutUser} from '../actions/creators';

import './login.scss';

class Login extends React.Component{
    logIn(){
        this.props.login({
            name: this.input.value
        });
    }
    render(){
        if(!this.props.isLoggedIn){
            return <div className="login-box">
                <form onSubmit={ () => this.logIn()}>
                <input type="text" ref={ element => this.input = element}/>
                <input type="submit" value="Login" />
                </form>
            </div>
        }
        else{
            return <Redirect to="/"/>
        }
    }
}

function mapStateToProps(state){
    return {
        isLoggedIn: state.loggedInUser
    }
}
function mapDispatchToProps(dispatch){
    return {
        login: user => dispatch(loginUser(user))
    }
}

let connected = connect(mapStateToProps,mapDispatchToProps)(Login);

export default connected;