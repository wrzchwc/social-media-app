import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {signOut, fetchClient} from "../../actions";
import {Link} from 'react-router-dom';
import {Avatar, IconButton, Stack, Tooltip} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import getInitials from "../../util/initials";
import {useTheme} from "@mui/styles";
import PostAdd from "../../comoponents/posts/PostAdd";
import {useMediaQuery} from "@mui/material";

const UserButtons = props => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        props.fetchClient();
    }, [props]);

    const onClose = () => {
        setOpen(false);
        setTouched(false);
    }

    return (
        <>
            <Stack direction="row" spacing={matchesSM ? 1 : 2} sx={{marginLeft: "auto"}}>
                <Tooltip title={'Search users'}>
                    <IconButton
                        color="secondary"
                        size={matchesSM ? 'small' : matchesMD ? 'medium' : 'large'}
                    >
                        <PersonSearchIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={'Add post'}>
                    <IconButton
                        color="secondary"
                        onClick={() => {
                            setOpen(true)
                        }}
                        size={matchesSM ? 'small' : matchesMD ? 'medium' : 'large'}
                    >
                        <PostAddIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={`${props.name} ${props.surname}`}>
                    <IconButton component={Link} size="large" to="/api/users/me">
                        <Avatar
                            sx={{
                                bgcolor: `${theme.palette.common.cyan}`,
                                color: `${theme.palette.common.violet}`,
                                height: matchesSM ? 31 : matchesMD ? 33 : 35,
                                width: matchesSM ? 31 : matchesMD ? 33 : 35
                            }}
                        >
                            {getInitials(props.name, props.surname)}
                        </Avatar>
                    </IconButton>
                </Tooltip>
                <Tooltip title={'Log out'}>
                    <IconButton
                        color="secondary"
                        component={Link}
                        onClick={() => {
                            props.signOut()
                        }}
                        size={matchesSM ? 'small' : matchesMD ? 'medium' : 'large'}
                        to="/"
                    >
                        <LogoutIcon/>
                    </IconButton>
                </Tooltip>
            </Stack>
            <PostAdd name={props.name} open={open} onClose={onClose} setTouched={setTouched} touched={touched}/>
        </>
    );
}

const mapStateToProps = state => {
    return {
        name: state.authentication.client.name,
        surname: state.authentication.client.surname
    };
}

export default connect(mapStateToProps, {signOut, fetchClient})(UserButtons);