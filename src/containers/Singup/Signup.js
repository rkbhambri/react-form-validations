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
        this.setState({
            [event.target.name]: event.target.value,
            isFirstNameValid: element === 'firstname' ? validateFirstname(event.target.value) : this.state.isFirstNameValid,
            isLastnameValid: element === 'lastname' ? validateLastname(event.target.value) : this.state.isLastnameValid,
            isEmailVald: element === 'email' ? validateEmail(event.target.value) : this.state.isEmailVald,
            isPasswordValid: element === 'password' ? validatePassword(event.target.value) : this.state.isPasswordValid
        });
    };

    formValidate = (event) => {
        const element = event.target.name;
        this.setState({
            isFirstNameValid: element === 'firstname' ? validateFirstname(event.target.value) : this.state.isFirstNameValid,
            isLastnameValid: element === 'lastname' ? validateLastname(event.target.value) : this.state.isLastnameValid,
            isEmailVald: element === 'email' ? validateEmail(event.target.value) : this.state.isEmailVald,
            isPasswordValid: element === 'password' ? validatePassword(event.target.value) : this.state.isPasswordValid
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
