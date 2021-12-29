import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {signUp} from "../actions";

class Register extends React.Component {
    onSubmit = formValues => {
        this.props.signUp(formValues);
    }

    renderInput = ({input, placeholder, secret}) => {
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

    render() {
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field
                        component={this.renderInput}
                        placeholder="username"
                        name="username"
                        secret={false}
                    />
                    <Field
                        component={this.renderInput}
                        placeholder="password"
                        name="password"
                        secret={true}
                    />
                    <Field
                        component={this.renderInput}
                        placeholder="name"
                        name="name"
                        secret={false}
                    />
                    <Field
                        component={this.renderInput}
                        placeholder="surname"
                        name="surname"
                        secret={false}
                    />
                    <Field
                        component={this.renderInput}
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


}

export default connect(
    null,
    {signUp}
)(reduxForm({form: 'registerForm'})(Register));