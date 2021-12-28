import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {signIn} from "../actions";


class Login extends React.Component {
    renderInput = ({input, label, secret}) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input} autoComplete="off" type={`${secret ? 'password' : 'text'}`}/>
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.signIn(formValues);
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
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
                    <button>LOG IN</button>
                </form>
            </div>
        );
    }

}

export default connect(null, {signIn})(reduxForm({form: 'loginForm'})(Login));