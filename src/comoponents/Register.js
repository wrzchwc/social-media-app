import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {signUp} from "../actions";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";


class Register extends React.Component {
    state = {birthdate: null};

    onSubmit = (formValues) => {
        this.props.signUp(formValues, () => {
            this.props.navigate('/api/users/signin');
        });
    }

    renderInput(props) {
        return (
            <div>
                <TextField
                    {...props.input}
                    autoComplete="off"
                    color={"primary"}
                    fullWidth
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
                                type={"datetime-local"}
                            />
                        </form>
                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
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

Register = reduxForm({form: 'registerForm'})(Register);
Register = connect(null, {signUp})(Register);
export default withRouter(Register);