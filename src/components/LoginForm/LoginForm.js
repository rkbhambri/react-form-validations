import React from 'react';
import './LoginForm.css';

const LoginForm = (props) => {
    return (
        <div className="login-form m-2">
            <form className="mt-5"
                onChange={(event) => props.inputChangeHandler(event)}
                onSubmit={(event) => props.loginSubmitHandler(event)}
                onBlur={(event) => props.formValidate(event)}>
                <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Email*"
                    autoComplete="off" />
                {!props.isEmailValid && <p className="error text-danger pl-1">Email is required</p>}
                <input
                    type="password"
                    className="form-control mt-3"
                    name="password"
                    placeholder="Password*" />
                {!props.isPasswordValid && <p className="error text-danger pl-1">Password is required</p>}
                <button type="sumit" className="btn btn-sm btn-primary mt-2">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
