import React from "react";
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/creators';
import LoginService from '../../services/LoginService';

import './NavBar.scss';

class NavBar extends React.Component {
    logOut(){
        LoginService.set(null);
        this.props.logout();
    }

    render(){
        if(this.props.loggedIn){
            return <div className="nav-bar">
                <div className="navItems">
                    <NavLink exact to={'/'} activeClassName="activeLink">About</NavLink>
                    <NavLink to={'/user'} activeClassName="activeLink">Users</NavLink>
                </div>
                <div className="welcome">Hello, {this.props.loggedIn.name}
                <button onClick={ ()=> this.logOut() }>Log out</button>
                </div>
            </div>;
        }
    }
}

function mapStateToProps(state){
    return {
        loggedIn: state.loggedInUser
    }
}

function mapDispatchToProps(dispatch){
    return {
        logout: ()=> dispatch( logoutUser() )
    }
}

let connected = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default withRouter(connected);