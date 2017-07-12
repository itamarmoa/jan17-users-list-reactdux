import React from "react";
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { selectUser} from '../../../actions/creators';
import {getUsersList} from '../../../services/actions';

import "./users-list.scss";

class UsersList extends React.Component {

    constructor(props){
        super(props);

        this.props.getUsersList();
    }


    // shouldComponentUpdate(){
    //     return true
    // }

    renderUser(user, i){
        return <li key={i}>
            <NavLink activeClassName="activeLink" to={`/user/${user.id}`}> { user.name }</NavLink>
            </li>
    }

    selectUser(user){
        this.props.onSelectedUser(user);
    }

    render(){
        if(this.props.isUsersListLoading){
            return (<nav className="users-list">
                <h1>Loading...</h1>
            </nav>)
        }
        else{
            return (<nav className="users-list">
                <h3>Users List</h3>
                <ul>
                    { this.props.users.map( this.renderUser.bind(this) ) }
                </ul>
            </nav>)
        }
    }
}

function mapStateToProps(state) {
    return {
        users: state.friends.usersList,
        isUsersListLoading: state.friends.isUsersListLoading
    }
}

function mapDispatchToProps(dispatch){
    return {
        getUsersList: () => dispatch(getUsersList()),
        onSelectedUser: (user) => dispatch(selectUser(user))
    }
}

let connected = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default withRouter(connected);