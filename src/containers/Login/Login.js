import React, { Component } from 'react';
import Heading from '../../components/Heading/Heading';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Login.css';
import { isEmpty } from '../../Helpers/Helpers';

class Login extends Component {

    state = {
        email: '',
        password: '',
        isEmailValid: true,
        isPasswordValid: true
    };

    inputChangeHandler = (event) => {
        const element = event.target.name;
        this.setState({
            [event.target.name]: event.target.value,
            isEmailValid: element === 'email' ? !isEmpty(event.target.value) : this.state.isEmailValid,
            isPasswordValid: element === 'password' ? !isEmpty(event.target.value) : this.state.isPasswordValid
        });
    };

    formValidate = (event) => {
        const element = event.target.name;
        this.setState({
            isEmailValid: element === 'email' ? !isEmpty(this.state.email) : this.state.isEmailValid,
            isPasswordValid: element === 'password' ? !isEmpty(this.state.password) : this.state.isPasswordValid
        });
    };

    loginSubmitHandler = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let password = this.state.password;

        if (!isEmpty(this.state.email) && !isEmpty(this.state.password)) {
            email = '';
            password = '';
            alert('Email: ' + this.state.email + '\nPassword: ' + this.state.password);
        }
        this.setState({
            email,
            password,
            isEmailValid: !isEmpty(this.state.email),
            isPasswordValid: !isEmpty(this.state.password)
        });
    };

    render() {
        return (
            <div className="login-wrapper col-md-4 mt-5">
                <Heading heading="Login" />
                <LoginForm
                    inputChangeHandler={(event) => this.inputChangeHandler(event)}
                    loginSubmitHandler={(event) => this.loginSubmitHandler(event)}
                    formValidate={(event) => this.formValidate(event)}
                    isEmailValid={this.state.isEmailValid}
                    isPasswordValid={this.state.isPasswordValid} />
            </div>
        );
    };
};

export default Login;
