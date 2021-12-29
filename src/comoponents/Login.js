import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {signIn} from "../actions";

const Login = props => {
    const renderInput = ({input, placeholder, secret}) => {
        return (
            <div>
                <input
                    {...input}
                    autoComplete="off"
                    placeholder={placeholder}
                    type={`${secret ? 'password' : 'text'}`}
                />
            </div>
        );
    }

    const onSubmit = formValues => {
        props.signIn(formValues);
    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <Field
                    component={renderInput}
                    placeholder="username"
                    name="username"
                    secret={false}
                />
                <Field
                    component={renderInput}
                    placeholder="password"
                    name="password"
                    secret={true}
                />
                <button>LOGIN</button>
            </form>
        </div>
    );


}

export default connect(null, {signIn})(reduxForm({form: 'loginForm'})(Login));