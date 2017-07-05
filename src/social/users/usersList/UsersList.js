import React from "react";
import {withRouter} from 'react-router';
import UserService from "../../../services/UserService";
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {addUsersList, selectUser} from '../../../actions/creators';

import "./users-list.scss";

class UsersList extends React.Component {

    constructor(){
        super();

        UserService
            .getAllUsers()
            .then( this.onAllUsers.bind(this) )
    }
    shouldComponentUpdate(){
        return true
    }

    onAllUsers(usersList){
        this.props.addUsers(usersList);
    }

    renderUser(user, i){
        return <li key={i}>
            <NavLink activeClassName="activeLink" to={`/user/${user.id}`}> { user.name }</NavLink>
            </li>
    }

    selectUser(user){
        this.props.onSelectedUser(user);
    }

    render(){
        return (<nav className="users-list">
                    <h3>Users List</h3>
                    <ul>
                        { this.props.users.map( this.renderUser.bind(this) ) }
                    </ul>
                </nav>)
    }
}

function mapStateToProps(state) {
    return {
        users: state.friends.usersList
    }
}

function mapDispatchToProps(dispatch){
    return {
        addUsers: (users) => dispatch(addUsersList(users)),
        onSelectedUser: (user) => dispatch(selectUser(user))
    }
}

let connected = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default withRouter(connected);