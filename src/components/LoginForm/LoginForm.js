import React from 'react';

const LoginForm = (props) => {
    return (
        <div className="login-form m-2">
            <form className="mt-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Email*" />
                <input
                    type="password"
                    className="form-control mt-3"
                    placeholder="Password*" />
                <button className="btn btn-sm btn-primary mt-2">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
