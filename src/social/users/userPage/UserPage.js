import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts"
import UserService from '../../../services/UserService';
import PostService from '../../../services/PostsService';

import "./user-page.scss";


export default class UserPage extends React.Component {
    constructor({match}){
        super();

        this.state = {
            user: null,
            posts: null
        }

        this.loadInfo(match.params.id);
    }

    componentWillReceiveProps({match}){
        this.loadInfo(match.params.id);
    }

    loadInfo(userId){
        if(userId){
            this.getUser(userId);
            this.getPosts(userId);
        }
    }

    onUser(user){
        this.setState({user});
    }

    getUser(userId){
        UserService
            .getUser(userId)
            .then(this.onUser.bind(this));
    }

    onPosts(posts){
        this.setState({posts});
    }

    getPosts(userId){
        PostService
            .getPosts(userId)
            .then(this.onPosts.bind(this));
    }

    render(){
        return (<main className="user-page">
                    <UserDetails user={ this.state.user }/>
                    <UserPosts posts={ this.state.posts }/>
                </main>)
    }
}
