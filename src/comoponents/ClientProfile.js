import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchClient} from "../actions";
import {Avatar, Button, Grid, Typography} from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import {useTheme} from "@mui/styles";
import getInitials from "../util/initials";
import getMonth from "../util/months";


const ClientProfile = ({client, fetchClient}) => {
    const theme = useTheme();

    useEffect(() => {
        fetchClient()
    }, [fetchClient]);

    const renderButtons = () => {
        let {followers, following} = client;
        try {
            return (
                <div className="flex" style={{justifyContent: 'space-around'}}>
                    <Button size={"small"}>{`${followers.length} followers`}</Button>
                    <Button size={"small"}>{`${following.length} following`}</Button>
                </div>
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
                alignItems={"flex-start"}
            >
                <Grid item container xs={4} direction={"column"} alignItems={"center"} spacing={2}
                      style={{marginTop: "3em"}}>
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
                    <Grid item container alignItems={"center"} justifyContent={"center"}>
                        <Grid item>
                            <Typography variant={"p"} style={{fontWeight: 250}}>
                                {client.username} <VerifiedUserIcon color={"success"}
                                                                    style={{verticalAlign: "bottom"}}/>
                            </Typography>
                        </Grid>
                        <Grid item>
                            {renderButtons()}
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} justifyContent={"center"} alignItems={"flex-start"}
                          alignContent={"center"} spacing={2}>
                        <Grid item>
                            <Typography variant={"p"} style={{fontWeight: 250}}>
                                <EmailIcon color={"primary"} style={{verticalAlign: "bottom"}}/> {client.email}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"p"} style={{fontWeight: 250}}>
                                <CakeIcon color={"primary"}
                                          style={{verticalAlign: "bottom"}}/> {renderBirthdate()}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>

                </Grid>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {client: state.authentication.client};
}

export default connect(mapStateToProps, {fetchClient})(ClientProfile);