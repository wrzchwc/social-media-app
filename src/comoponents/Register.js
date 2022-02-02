import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {signUp} from "../actions";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";


class Register extends React.Component {
    state = {
        birthdate: null,
        invalid: true
    };

    onSubmit = (formValues) => {
        this.props.signUp(formValues, () => {
            this.props.navigate('/api/users/signin');
        });
    }

    renderInput(props) {
        let {error, touched} = props.meta;
        let {label} = props;
        const helperText = error && touched ? `${error} ${label ? label : 'birthdate'}` : null;
        return (
            <div>
                <TextField
                    {...props.input}
                    autoComplete="off"
                    color={"primary"}
                    error={props.meta.error && props.meta.touched}
                    fullWidth
                    inputProps={props.inputProps}
                    helperText={helperText}
                    id={props.placeholder}
                    label={props.label}
                    margin={"dense"}
                    placeholder={props.placeholder}
                    type={props.type}
                />
            </div>
        );
    }

    render() {
        return (
            <Grid container style={{minHeight: "89vh"}}>
                <Grid
                    item
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Grid item>
                        <Typography variant={"h3"}>REGISTER</Typography>
                    </Grid>
                    <Grid item>
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <Field
                                component={this.renderInput}
                                label={"username"}
                                placeholder="username"
                                name="username"
                                type={"text"}
                            />
                            <Field
                                component={this.renderInput}
                                label={"password"}
                                placeholder="password"
                                name="password"
                                type={"password"}
                            />
                            <Field
                                component={this.renderInput}
                                label={"name"}
                                placeholder="name"
                                name="name"
                                type={"text"}
                            />
                            <Field
                                component={this.renderInput}
                                label={"surname"}
                                placeholder="surname"
                                name="surname"
                                type={"text"}
                            />
                            <Field
                                component={this.renderInput}
                                label={"email"}
                                placeholder="email"
                                name="email"
                                type={"text"}
                            />
                            <Field
                                component={this.renderInput}
                                name="birthdate"
                                inputProps={{max: new Date().toISOString().substring(0, 10)}}
                                type={"date"}
                            />
                        </form>
                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
                            disabled={this.props.invalid}
                            size={"large"}
                            variant={"contained"}
                            onClick={this.props.handleSubmit(this.onSubmit)}
                            style={{color: "#DAF0EE"}}
                            to={"/api/users/signup"}
                        >
                            Register
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
        );
    }
}

const withRouter = WrappedComponent => props => {
    const navigate = useNavigate();
    return (<WrappedComponent {...props} navigate={navigate}/>);
};

const validateAll = (values, props) => {
    let validation = {};
    const instruction = 'Enter';
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.username) {
        validation['username'] = instruction;
    }

    if (!values.password) {
        validation['password'] = instruction;
    }

    if (!values.name) {
        validation['name'] = instruction;
    }

    if (!values.surname) {
        validation['surname'] = instruction;
    }

    if (!values.birthdate) {
        validation['birthdate'] = 'Select';
    }

    if (!values.email) {
        validation['email'] = instruction;
    } else if (!regex.test(values.email)) {
        validation['email'] = `${instruction} valid`;
    }

    return validation;
}

Register = reduxForm({form: 'registerForm', validate: validateAll})(Register);
Register = connect(null, {signUp})(Register);
export default withRouter(Register);