import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {signOut, fetchClient} from "../../actions";
import {Link} from 'react-router-dom';
import {Avatar, Button, Dialog, DialogContent, IconButton, Stack} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';
import getInitials from "../../util/initials";
import {useTheme} from "@mui/styles";
import PostAdd from "../../comoponents/posts/PostAdd";

const UserButtons = props => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        props.fetchClient();
    }, [props]);

    const onClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Stack direction="row" spacing={2} sx={{marginLeft: "auto"}}>
                <Button
                    className={props.classes.tab}
                    color="secondary"
                    endIcon={<PostAddIcon/>}
                    onClick={() => {
                        setOpen(true)
                    }}
                    size="large"
                    variant="text"
                >
                    ADD POST
                </Button>
                <IconButton component={Link} size="large" to="/api/users/me">
                    <Avatar
                        sx={{
                            bgcolor: `${theme.palette.common.cyan}`,
                            color: `${theme.palette.common.violet}`,
                            height: "35px",
                            width: "35px"
                        }}
                    >
                        {getInitials(props.name, props.surname)}
                    </Avatar>
                </IconButton>
                <IconButton
                    color="secondary"
                    component={Link}
                    onClick={() => {
                        props.signOut()
                    }}
                    size="large"
                    to="/"
                >
                    <LogoutIcon/>
                </IconButton>
            </Stack>
            <PostAdd open={open} onClose={onClose}/>
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