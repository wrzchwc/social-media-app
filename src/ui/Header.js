import React, {useState} from "react";
import {AppBar, Button, Tab, Tabs, Toolbar, Typography, useScrollTrigger} from "@mui/material";
import {makeStyles} from "@mui/styles";
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import {Link} from "react-router-dom";

const ElevationScroll = props => {
    const {children} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    tab: {
        ...theme.typography.tab,
        marginLeft: "25px",
        minWidth: 10,
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "1em"
    }
}))

const Header = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    }

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar sx={{height: "5em"}}>
                        <Typography
                            color="secondary"
                            component={Link}
                            sx={{
                                fontFamily: "'Licorice', cursive",
                                fontSize: "3em",
                                textDecoration: "none",
                                boxShadow: "none"
                            }}
                            to="/"
                        >
                            Social Media App
                        </Typography>
                        <Tabs
                            onChange={handleChange}
                            indicatorColor="primary"
                            sx={{marginLeft: "auto"}}
                            textColor="secondary"
                            value={value}
                        >
                            <Tab
                                className={classes.tab}
                                component={Link}
                                icon={<LoginIcon/>}
                                iconPosition="end"
                                label="Login"
                                to="/api/users/signin"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                icon={<AppRegistrationIcon/>}
                                iconPosition="end"
                                label="Register"
                                to="/api/users/signup"
                            />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );

}

export default Header;