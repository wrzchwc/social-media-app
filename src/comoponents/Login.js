import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {clearRecentRegistration, signIn} from "../actions";
import {Button, Grid, TextField, Typography} from "@mui/material";


class Login extends React.Component {
    componentWillUnmount() {
        this.props.clearRecentRegistration();
    }

    renderInput({input, placeholder, secret}) {
        return (
            <div>
                <TextField
                    {...input}
                    autoComplete={"off"}
                    color={"primary"}
                    id={placeholder}
                    label={placeholder}
                    margin={"dense"}
                    placeholder={placeholder}
                    variant={"outlined"}
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
            <Grid container style={{minHeight: "89vh"}}>
                <Grid
                    item
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    direction={"column"}
                    style={{marginTop: "-4em"}}
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
                            />
                            <Field
                                component={this.renderInput}
                                placeholder="password"
                                name="password"
                                secret={true}
                            />
                        </form>
                    </Grid>
                    <Grid item>
                        <Button
                            size={"large"}
                            variant={"contained"}
                            onClick={this.props.handleSubmit(this.onSubmit)}
                            style={{color: "#DAF0EE"}}
                        >
                            Log in
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }


}

const mapStateToProps = state => {
    return {
        initialValues: {
            username: state.registration.username,
            password: state.registration.password
        }
    }
};


Login = reduxForm({form: 'loginForm'})(Login);
export default connect(mapStateToProps, {clearRecentRegistration, signIn})(Login);