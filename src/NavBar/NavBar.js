import React from "react";
import {Link} from 'react-router-dom';

import './NavBar.scss';

export default class NavBar extends React.Component {
    render(){
        return (<div className="nav-bar">
                    <Link to={'/'}>About</Link>
                    <Link to={'/user'}>Users</Link>
                </div>);
    }
}
