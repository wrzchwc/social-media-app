import React from "react";
import {AppBar, Button, Stack, Toolbar, Typography, useScrollTrigger} from "@mui/material";
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
                            }}
                            to="/"
                        >
                            Social Media App
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{marginLeft: "auto"}}>
                            <Button
                                className={classes.tab}
                                color="secondary"
                                component={Link}
                                endIcon={<LoginIcon/>}
                                size="large"
                                to="/api/users/signin"
                            >
                                Login
                            </Button>
                            <Button
                                className={classes.tab}
                                color="secondary"
                                component={Link}
                                endIcon={<AppRegistrationIcon/>}
                                size="large"
                                to="/api/users/signup"
                                variant="text"
                            >
                                Register
                            </Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );

}

export default Header;