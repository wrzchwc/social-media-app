import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {signUp} from "../actions";

const Register = props => {
    const onSubmit = formValues => {
        props.signUp(formValues);
    }
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

    return (
        <div>
            <h2>Register</h2>
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
                <Field
                    component={renderInput}
                    placeholder="name"
                    name="name"
                    secret={false}
                />
                <Field
                    component={renderInput}
                    placeholder="surname"
                    name="surname"
                    secret={false}
                />
                <Field
                    component={renderInput}
                    placeholder="email"
                    name="email"
                    secret={false}
                />
                <p>birthdate</p>
                <button>REGISTER</button>
            </form>
        </div>
    );


}

export default connect(
    null,
    {signUp}
)(reduxForm({form: 'registerForm'})(Register));