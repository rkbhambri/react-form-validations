import React, { Component } from 'react';
import Login from '../Login/Login';
import Signup from '../Singup/Signup';

class Layout extends Component {
    render() {
        return (
            <div className="layout row col-md-9 offset-3 mt-5">
                <Login />
                <Signup />
            </div>
        );
    };
};

export default Layout;
