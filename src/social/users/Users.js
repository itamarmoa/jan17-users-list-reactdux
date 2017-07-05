import React from "react";
import {connect} from 'react-redux';
import UserPage from "./userPage/UserPage";
import UsersList from "./usersList/UsersList";

import {Route} from 'react-router';

import '../../main.scss';

class Users extends React.Component {
    render(){
        return (<div>
                    <UsersList />
                    <Route path="/user/:id" component={UserPage}/>
                </div>)
    }
}

function mapStateToProps(state){
    return {
        selectedUser: state.friends.selectedUser
    }
}

export default connect(mapStateToProps, null)(Users);