import React, {useEffect} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {clearRecentRegistration, signIn} from "../actions";
import {useNavigate} from "react-router-dom";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {makeStyles, useTheme} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    button: {
        color: "#DAF0EE"
    }
}))

const Login = props => {
    const classes = useStyles();
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        return () => {
            props.clearRecentRegistration()
        }
    }, [])

    const renderInput = ({input, placeholder, secret}) => {
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

    const onSubmit = formValues => {
        props.signIn(formValues, () => navigate('/api/posts'));
    }

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
                    </form>
                </Grid>
                <Grid item>
                    <Button
                        size={"large"}
                        variant={"contained"}
                        onClick={props.handleSubmit(onSubmit)}
                        className={classes.button}
                    >
                        Log in
                    </Button>
                </Grid>
            </Grid>
        </Grid>
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