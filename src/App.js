import React from 'react';
import {Route} from 'react-router';

import Login from './login/login';
import Social from './social/Social';
import AuthRoute from './AuthRoute';

export default class App extends React.Component{
    render(){
        return (
            <div>
                <AuthRoute
                    path=""
                    component={Social}
                />
                <Route
                    path="/login"
                    component={Login}
                />
            </div>
        )
    }
}