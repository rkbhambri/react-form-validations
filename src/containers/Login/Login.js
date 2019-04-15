import React, { Component } from 'react';
import Heading from '../../components/Heading/Heading';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="login-wrapper col-md-4 mt-5">
                <Heading heading="Login" />
                <LoginForm />
            </div>
        );
    };
};

export default Login;
