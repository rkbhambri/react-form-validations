import React from 'react';
import './SignupForm.css';

const SignupForm = (props) => {
    return (
        <div className="signup-form">
            <form
                className="mt-5"
                onChange={(event) => props.inputChangeHandler(event)}
                onSubmit={(event) => props.signupSubmitHandler(event)}
                onBlur={(event) => props.formValidate(event)}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="First name*"
                    name="firstname"
                />
                {/* Firstname error */}
                {!props.isFirstNameValid && <p className="error text-danger pl-1">First name is not allowed to be empty</p>}

                <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Lastname*"
                    name="lastname"
                />
                {/* Lastname error  */}
                {!props.isLastnameValid && <p className="error text-danger pl-1">Last name is not allowed to be empty</p>}

                <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Email*"
                    name="email"
                />
                {/* Email error  */}
                {!props.isEmailVald && <p className="error text-danger pl-1">Please enter a valid email</p>}

                <input
                    type="password"
                    className="form-control mt-3"
                    placeholder="Password*"
                    name="password"
                />
                {/* Password error  */}
                {
                    !props.isPasswordValid &&
                    <p className="error text-danger pl-1">At least 6 characters with at least 1 Small & Upper case character, a number & symbol</p>
                }

                <button type="sumit" className="btn btn-sm btn-primary mt-2 mb-4">Signup</button>
            </form>
        </div>
    );
};

export default SignupForm;
