import React, {useState} from "react";
import '../styles/Layout.css';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {signUp} from "../actions";
import {useNavigate} from "react-router-dom";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {makeStyles, useTheme} from "@mui/styles";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";

const useStyles = makeStyles(theme => ({
    button: {
        color: "DAF0EE"
    }
}))

const Register = props => {
    const classes = useStyles();
    const navigate = useNavigate();
    const theme = useTheme();
    const [birthdate, setBirthdate] = useState(null);

    const onSubmit = (formValues) => {
        props.signUp({...formValues, ["birthdate"]: birthdate}, () => navigate('/api/users/signin'));
    }

    const renderInput = ({input, placeholder, secret}) => {
        return (
            <div>
                <TextField
                    {...input}
                    autoComplete="off"
                    autoFocus
                    color={"primary"}
                    id={placeholder}
                    label={placeholder}
                    margin={"dense"}
                    placeholder={placeholder}
                    type={`${secret ? 'password' : 'text'}`}
                />
            </div>
        );
    }

    const renderDatePicker = (props) => {
        return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="birthdate"
                    value={birthdate}
                    onChange={(newValue) => {
                        setBirthdate(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField {...params} style={{marginLeft: "auto", maxWidth: "13em"}} margin={"dense"}/>
                    )}
                />
            </LocalizationProvider>
        );
    }

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
                        <Field
                            component={renderInput}
                            placeholder="name"
                            name="name"
                            secret={false}
                        />
                        <Field
                            component={renderInput}
                            placeholder="surname"
                            name="surname"
                            secret={false}
                        />
                        <Field
                            component={renderInput}
                            placeholder="email"
                            name="email"
                            secret={false}
                        />
                        <Field
                            component={renderDatePicker}
                            name="birthdate"
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
                        Register
                    </Button>
                </Grid>

            </Grid>
        </Grid>
    );
}

export default connect(null, {signUp})(reduxForm({form: 'registerForm'})(Register));