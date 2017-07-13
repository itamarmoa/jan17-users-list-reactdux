import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts"

import {getUserDetails, getUserPosts} from '../../../services/actions';

import {connect} from 'react-redux';

import "./user-page.scss";


class UserPage extends React.Component {
    constructor(props){
        super(props);
        let userId = props.match.params.id || null;
        this.loadInfo(userId);
    }
    componentWillReceiveProps({match}){
        let next = match.params.id;
        let current = this.props.match.params.id;
        if(current && current !== next) {
            this.loadInfo(next);
        }
    }
    loadInfo(userId){
        if(userId){
            this.props.getUser(userId);
            // this.props.getPosts(userId);
        }
    }

    // onPosts(posts){
    //     this.setState({posts});
    // }
    //
    // getPosts(userId){
    //     PostService
    //         .getPosts(userId)
    //         .then(this.onPosts.bind(this));
    // }

    render(){)
        if(this.props.isUserLoading){
           return  (<main className="user-page">
               <h1>Loading...</h1>
           </main>)
        }
        else {
            return (<main className="user-page">
                <UserDetails user={ this.props.user }/>
                <UserPosts posts={ this.props.posts }/>
            </main>)
        }
    }
}

function mapStateToProps(state){
    return {
        user: state.friends.selectedUser.details,
        posts: state.friends.selectedUser.posts,
        isUserLoading: state.friends.selectedUser.isUserLoading
    }
}
function mapDispatchToProps(dispatch) {
    return{
        getUser: (userId) => dispatch( getUserDetails(userId) )
        // getPosts: (userId) => dispatch( getUserPosts(userId) )
    }
}

let connected = connect(mapStateToProps,mapDispatchToProps)(UserPage);
export default connected;