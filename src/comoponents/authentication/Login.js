import React, {useEffect} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {clearRecentRegistration, signIn} from "../../actions";
import {useNavigate} from "react-router-dom";

const Login = props => {
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            props.clearRecentRegistration()
        }
    }, [])

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
        props.signIn(formValues, () => navigate('/api/posts'));
    }

    return (
        <div>
            <h2>Log in</h2>
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
                <button>LOG IN</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        initialValues: {
            username: state.registration.username,
            password: state.registration.password
        }
    }
};

export default connect(mapStateToProps, {signIn, clearRecentRegistration})
(reduxForm({form: 'loginForm'})(Login));