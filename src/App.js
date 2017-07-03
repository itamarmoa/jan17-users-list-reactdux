import React from "react";
import {connect} from 'react-redux';
import UserPage from "./userPage/UserPage";
import UsersList from "./usersList/UsersList";

import './main.scss';

class App extends React.Component {
    render(){
        return (<div>
                    <UsersList />
                    <UserPage
                        user={ this.props.selectedUser.details }
                        posts={ this.props.selectedUser.posts }
                    />
                </div>)
    }
}

function mapStateToProps(state){
    return {
        selectedUser: state.friends.selectedUser
    }
}

export default connect(mapStateToProps, null)(App);