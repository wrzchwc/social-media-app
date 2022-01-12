import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchClient} from "../actions";
import {Avatar, Button, Grid, Typography} from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import {makeStyles, useTheme} from "@mui/styles";
import getInitials from "../util/initials";
import getMonth from "../util/months";

const useStyles = makeStyles(theme => ({
    icon: {
      verticalAlign: "bottom"
    },
    label: {
        fontFamily: "Roboto",
        fontWeight: "375"
    },
    primary: {
        color: theme.palette.common.violet
    },
    verified: {
        color: theme.palette.success.main
    }
}));

const ClientProfile = ({client, fetchClient}) => {
    const theme = useTheme();
    const classes = useStyles();

    useEffect(() => {
        fetchClient()
    }, [fetchClient]);

    const renderButton = (attribute, label) => {
        try {
            return (
                <Button size={"small"}>{`${attribute.length} ${label}`}</Button>
            );
        } catch (e) {
        }
    }

    const renderBirthdate = () => {
        let {dateOfBirth} = client;
        try {
            return `${dateOfBirth[2]} ${getMonth(dateOfBirth[1])} ${dateOfBirth[0]}`;
        } catch (e) {
        }
    }

    return (
        <Grid container style={{minHeight: "89vh"}}>
            <Grid
                item
                container
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Grid item container direction={"column"} alignItems={"center"} spacing={2}>
                    <Grid item>
                        <Avatar
                            sx={{
                                bgcolor: `${theme.palette.common.cyan}`,
                                color: `${theme.palette.common.violet}`,
                                fontSize: "4em",
                                height: "2em",
                                width: "2em"
                            }}
                        >
                            {getInitials(client.name, client.surname)}
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Typography variant={"h3"} style={{fontWeight: 300}}>
                            {`${client.name} ${client.surname}`}
                        </Typography>
                    </Grid>
                    <Grid item container alignItems={"center"} justifyContent={"center"} spacing={1}>
                        <Grid item>
                            <Typography variant={"p"} className={`${classes.label} ${classes.verified}`}>
                                {client.username} <VerifiedUserIcon className={classes.icon}/>
                            </Typography>
                        </Grid>
                        <Grid item>{renderButton(client.followers, 'followers')}</Grid>
                        <Grid item>{renderButton(client.following, 'following')}</Grid>
                    </Grid>
                    <Grid item container direction={"column"} justifyContent={"center"} alignItems={"flex-start"}
                          alignContent={"center"} spacing={2}>
                        <Grid item>
                            <Typography variant={"p"} className={`${classes.primary} ${classes.label}`}>
                                <EmailIcon color={"secondary"} className={classes.icon}/> {client.email}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"p"} className={`${classes.primary} ${classes.label}`}>
                                <CakeIcon color={"secondary"} className={classes.icon}/> {renderBirthdate()}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {client: state.authentication.client};
}

export default connect(mapStateToProps, {fetchClient})(ClientProfile);