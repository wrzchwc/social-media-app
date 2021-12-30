import React from 'react';
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signOut} from "../../actions";
import {Link} from 'react-router-dom';
import {Avatar, Button, IconButton, Stack} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Theme from "../Theme";

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
            <IconButton component={Link} size="large" to="/api/users/me">
                <Avatar
                    sx={{
                        bgcolor: `${Theme.palette.common.cyan}`,
                        color: `${Theme.palette.common.violet}`,
                        height: "35px",
                        width: "35px"
                    }}
                >
                    JW
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

export default connect(null, {signOut})(UserButtons);