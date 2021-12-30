import React from 'react';
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signOut} from "../../actions";
import {Link} from 'react-router-dom';
import {Avatar, Button, IconButton, Stack} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';

const UserButtons = props => {
    const navigate = useNavigate();

    return (
        <Stack direction="row" spacing={2} sx={{marginLeft: "auto"}}>
            <Button
                className={props.classes.tab}
                color="secondary"
                component={Link}
                endIcon={<PostAddIcon/>}
                size="large"
                to="/"
                variant="text"
            >
                Add post
            </Button>
            <Avatar>JW</Avatar>
            <IconButton
                color="secondary"
                onClick={() => {props.signOut(() => navigate('/'))}}
                size="large"
            >
                <LogoutIcon/>
            </IconButton>
        </Stack>
    );
}

export default connect(null, {signOut})(UserButtons);