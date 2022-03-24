import React from "react";
import {connect} from "react-redux";
import {AppBar, Toolbar, Typography, useMediaQuery, useScrollTrigger} from "@mui/material";
import {makeStyles, useTheme} from "@mui/styles";
import {Link} from "react-router-dom";
import UserButtons from "./UserButtons";
import GuestButtons from "./GuestButtons";

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
        fontWeight: 500,
        marginLeft: "25px",
        minWidth: 10,
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "1em",
        [theme.breakpoints.down('sm')]:{
            marginBottom: '0.5em'
        }
    }
}))

const Header = ({isSignedIn}) => {
    const classes = useStyles();
    const buttons = isSignedIn ? <UserButtons classes={classes}/> : <GuestButtons classes={classes}/>
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar sx={{height: matchesSM ? '4em' : '5em'}}>
                        <Typography
                            color="secondary"
                            component={Link}
                            sx={{
                                fontFamily: "'Licorice', cursive",
                                fontSize: matchesSM ? "1.5em" : "3em",
                                textDecoration: "none",
                            }}
                            to="/"
                        >
                            Social Media App
                        </Typography>
                        {buttons}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );

}

const mapStateToProps = state => {
    return {isSignedIn: state.authentication.isSignedIn};
};

export default connect(mapStateToProps)(Header);