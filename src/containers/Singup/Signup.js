import React, { Component } from 'react';
import Heading from '../../components/Heading/Heading';
import SignupForm from '../../components/SignupForm/SignupForm';
import { validateFirstname, validateLastname, validateEmail, validatePassword } from '../../Helpers/Helpers';
import './Signup.css';

class Signup extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        isFirstNameValid: true,
        isLastnameValid: true,
        isEmailVald: true,
        isPasswordValid: true
    };

    inputChangeHandler = (event) => {
        const element = event.target.name;
        let isFirstNameValid = this.state.isFirstNameValid;
        let isLastnameValid = this.state.isLastnameValid;
        let isEmailVald = this.state.isEmailVald;
        let isPasswordValid = this.state.isPasswordValid;

        if (element === 'firstname') {
            isFirstNameValid = validateFirstname(event.target.value);
        }
        if (element === 'lastname') {
            isLastnameValid = validateLastname(event.target.value);
        }
        if (element === 'email') {
            isEmailVald = validateEmail(event.target.value);
        }
        if (element === 'password') {
            isPasswordValid = validatePassword(event.target.value);
        }

        this.setState({
            [event.target.name]: event.target.value,
            isFirstNameValid,
            isLastnameValid,
            isEmailVald,
            isPasswordValid
        });
    };

    formValidate = (event) => {
        const element = event.target.name;
        let isFirstNameValid = this.state.isFirstNameValid;
        let isLastnameValid = this.state.isLastnameValid;
        let isEmailVald = this.state.isEmailVald;
        let isPasswordValid = this.state.isPasswordValid;

        if (element === 'firstname') {
            isFirstNameValid = validateFirstname(event.target.value);
        }
        if (element === 'lastname') {
            isLastnameValid = validateLastname(event.target.value);
        }
        if (element === 'email') {
            isEmailVald = validateEmail(event.target.value);
        }
        if (element === 'password') {
            isPasswordValid = validatePassword(event.target.value);
        }

        this.setState({
            isFirstNameValid,
            isLastnameValid,
            isEmailVald,
            isPasswordValid
        });
    };

    signupSubmitHandler = (event) => {
        event.preventDefault();

        if (validateFirstname(this.state.firstname) && validateLastname(this.state.lastname) && validateEmail(this.state.email) && validatePassword(this.state.password)) {
            alert('Firstname: ' + this.state.firstname + '\nLastname: ' + this.state.lastname + '\nEmail: ' + this.state.email);
        }

        this.setState({
            isFirstNameValid: validateFirstname(this.state.firstname),
            isLastnameValid: validateLastname(this.state.lastname),
            isEmailVald: validateEmail(this.state.email),
            isPasswordValid: validatePassword(this.state.password)
        });
    };

    render() {
        return (
            <div className="signup-wrapper col-md-4 ml-3 mt-5">
                <Heading heading="Signup" />
                <SignupForm
                    inputChangeHandler={(event) => this.inputChangeHandler(event)}
                    signupSubmitHandler={(event) => this.signupSubmitHandler(event)}
                    formValidate={(event) => this.formValidate(event)}
                    {...this.state} />
            </div>
        );
    };
};

export default Signup;
