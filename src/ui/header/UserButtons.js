import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signOut, fetchClient} from "../../actions";
import {Link} from 'react-router-dom';
import {Avatar, Button, IconButton, Stack} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Theme from "../Theme";

const UserButtons = props => {
    const navigate = useNavigate();
    useEffect(() => {
        props.fetchSignedUser();
    }, []);

    const getInitials = () => {
        try {
            return props.name.substr(0, 1).concat(props.surname.substr(0, 1));
        } catch (e) {
            return '?'
        }
    }

    return (
        <Stack direction="row" spacing={2} sx={{marginLeft: "auto"}}>
            <Button
                className={props.classes.tab}
                color="secondary"
                component={Link}
                endIcon={<PostAddIcon/>}
                size="large"
                to="/api/posts/add"
                variant="text"
            >
                Add post
            </Button>
            <IconButton component={Link} size="large" to="/api/users/me">
                <Avatar
                    sx={{
                        bgcolor: `${Theme.palette.common.cyan}`,
                        color: `${Theme.palette.common.violet}`,
                        height: "35px",
                        width: "35px"
                    }}
                >
                    {getInitials()}
                </Avatar>
            </IconButton>
            <IconButton
                color="secondary"
                component={Link}
                onClick={() => {
                    props.signOut(() => navigate('/'))
                }}
                size="large"
                to="/"
            >
                <LogoutIcon/>
            </IconButton>
        </Stack>
    );
}

const mapStateToProps = state => {
    return {
        name: state.authentication.client.name,
        surname: state.authentication.client.surname
    };
}

export default connect(mapStateToProps, {signOut, fetchSignedUser: fetchClient})(UserButtons);