import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router';


class AuthRoute extends React.Component{
    render(){
        if(this.props.isLoggedIn){
            return <div>
                <Route
                    path={this.props.path}
                    component={this.props.component}/>
            </div>
        }
        else {
            return <Redirect to="/login"/>
        }
    }
}

function mapStateToProps(state){
    return {
        isLoggedIn: state.loggedInUser
    }
}

let connected = connect(mapStateToProps,null)(AuthRoute);

export default withRouter(connected);
