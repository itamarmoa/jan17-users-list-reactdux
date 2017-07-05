import React from "react";
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import './NavBar.scss';

class NavBar extends React.Component {
    render(){
        if(this.props.loggedIn){
            return <div className="nav-bar">
                <div className="navItems">
                    <NavLink exact to={'/'} activeClassName="activeLink">About</NavLink>
                    <NavLink to={'/user'} activeClassName="activeLink">Users</NavLink>
                </div>
                <div className="welcome">Hello, {this.props.loggedIn.name} </div>
            </div>;
        }
    }
}

function mapStateToProps(state){
    return {
        loggedIn: state.loggedInUser
    }
}

let connected = connect(mapStateToProps, null)(NavBar);

export default withRouter(connected);