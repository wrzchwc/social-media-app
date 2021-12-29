import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {signUp} from "../actions";

class Register extends React.Component {
    onSubmit = formValues => {
        this.props.signUp(formValues);
    }

    renderInput = ({input, label, secret}) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input} autoComplete="off"  type={`${secret ? 'password' : 'text'}`}/>
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
                        label="username"
                        name="username"
                        secret={false}
                    />
                    <Field
                        component={this.renderInput}
                        label="password"
                        name="password"
                        secret={true}
                    />
                    <Field
                        component={this.renderInput}
                        label="name"
                        name="name"
                        secret={false}
                    />
                    <Field
                        component={this.renderInput}
                        label="surname"
                        name="surname"
                        secret={false}
                    />
                    <Field
                        component={this.renderInput}
                        label="email"
                        name="email"
                        secret={false}
                    />
                    <label>birthdate</label>
                </form>
                <button>REGISTER</button>
            </div>
        );
    }


}

export default connect(
    null,
    {signUp}
)(reduxForm({form: 'registerForm'})(Register));