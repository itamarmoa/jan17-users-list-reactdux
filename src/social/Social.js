import React from 'react';
import {Route} from 'react-router';


import NavBar from './NavBar/NavBar';
import About from './about/About';
import Users from './users/Users';

export default class Social extends React.Component{
    render(){
        return (
            <div>
                <NavBar />
                <Route exact path="/" component={About} />
                <Route path="/user" component={Users}/>
            </div>
        )
    }
}

