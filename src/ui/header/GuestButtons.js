import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Stack, useMediaQuery} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import {useTheme} from "@mui/styles";

const GuestButtons = props => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Stack direction="row" spacing={2} sx={{marginLeft: "auto"}}>
            <Button
                className={props.classes.tab}
                color="secondary"
                component={Link}
                endIcon={<LoginIcon/>}
                size={matchesSM ? 'small' : matchesMD ? 'medium' : 'large'}
                to="/api/users/signin"
            >
                LOG IN
            </Button>
            <Button
                className={props.classes.tab}
                color="secondary"
                component={Link}
                endIcon={<AppRegistrationIcon/>}
                size={matchesSM ? 'small' : matchesMD ? 'medium' : 'large'}
                to="/api/users/signup"
                variant="text"
            >
                REGISTER
            </Button>
        </Stack>
    );
}

export default GuestButtons;