import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {clearRecentRegistration, signIn, acknowledgeSignInError} from "../actions";
import {Alert, Button, Collapse, Grid, TextField, Typography} from "@mui/material";


class Login extends React.Component {
    state = {valid: false};

    componentWillUnmount() {
        this.props.clearRecentRegistration();
    }

    renderInput(props) {
        const helperText = props.meta.error && props.meta.touched ? 'Field must be filled' : null;
        return (
            <div>
                <TextField
                    {...props.input}
                    autoComplete={"off"}
                    color={"primary"}
                    id={props.placeholder}
                    error={props.meta.error && props.meta.touched}
                    helperText={helperText}
                    label={props.placeholder}
                    margin={"dense"}
                    placeholder={props.placeholder}
                    variant={"outlined"}
                    type={`${props.secret ? 'password' : 'text'}`}
                />
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.signIn(formValues);
    }

    validate = (value, allValues) => {
        this.setState({valid: Object.values(allValues).some(v => v === '')});
        return value ? undefined : 'error';
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
                    style={{marginTop: "-4em"}}
                    spacing={1}
                >
                    <Grid item>
                        <Typography variant={"h3"}>LOG IN</Typography>
                    </Grid>
                    <Grid item>
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <Field
                                component={this.renderInput}
                                placeholder="username"
                                name="username"
                                secret={false}
                                validate={this.validate}
                            />
                            <Field
                                component={this.renderInput}
                                placeholder="password"
                                name="password"
                                secret={true}
                                validate={this.validate}
                            />
                        </form>
                    </Grid>
                    <Grid item>
                        <Button
                            disabled={this.state.valid}
                            size={"large"}
                            variant={"contained"}
                            onClick={this.props.handleSubmit(this.onSubmit)}
                            style={{color: "#DAF0EE"}}
                        >
                            Log in
                        </Button>
                    </Grid>
                    <Grid item>
                        <Collapse in={this.props.loginError} style={{marginTop: "1em"}}>
                            <Alert
                                closeText={'Try again or register'}
                                onClose={() => {
                                    this.props.acknowledgeSignInError();
                                }}
                                severity="error"
                                variant={"filled"}
                            >
                                Incorrect credentials or user does not exist!
                            </Alert>
                        </Collapse>
                    </Grid>
                </Grid>
            </Grid>
        );
    }


}

const mapStateToProps = state => {
    return {
        loginError: state.authentication.error,
        initialValues: {
            username: state.registration.username,
            password: state.registration.password
        }
    }
};


Login = reduxForm({form: 'loginForm'})(Login);
export default connect(
    mapStateToProps,
    {clearRecentRegistration, signIn, acknowledgeSignInError}
)(Login);