import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {signIn} from "../actions";


class Login extends React.Component {
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
                    <button>LOGIN</button>
                </form>
            </div>
        );
    }

}

export default connect(null, {signIn})(reduxForm({form: 'loginForm'})(Login));