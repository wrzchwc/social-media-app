import React from "react";
import '../styles/Layout.css';
import {connect} from "react-redux";
import {fetchClient} from "../actions";
import {months} from './months';
import {Avatar, Button, Grid, Typography} from "@mui/material";
import Theme from "../ui/Theme";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';

class ClientProfile extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchClient();
    }

    renderButtons() {
        let {followers, following} = this.props.client;
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

    renderBirthdate() {
        let {dateOfBirth} = this.props.client;
        try {
            return `${dateOfBirth[2]} ${months(dateOfBirth[1])} ${dateOfBirth[0]}`;
        } catch (e) {
        }
    }

    getInitials(){
        let {client} = this.props;
        try {
            return client.name.substr(0, 1).concat(client.surname.substr(0, 1));
        } catch (e) {
            return '?'
        }
    }

    render() {
        let {client} = this.props;

        return (
            <Grid container style={{minHeight: "89vh"}}>
                <Grid
                    item
                    container
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                >
                    <Grid item container xs={4} direction={"column"} alignItems={"center"} spacing={2} style={{marginTop: "3em"}}>
                        <Grid item>
                            <Avatar
                                sx={{
                                    bgcolor: `${Theme.palette.common.cyan}`,
                                    color: `${Theme.palette.common.violet}`,
                                    fontSize: "4em",
                                    height: "2em",
                                    width: "2em"
                                }}
                            >
                                {this.getInitials()}
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Typography variant={"h3"} style={{fontWeight: 300}}>
                                {`${client.name} ${client.surname}`}
                            </Typography>
                        </Grid>
                        <Grid item container alignItems={"center"} justifyContent={"center"}>
                            <Grid item>
                                <Typography variant={"p"} style={{fontWeight: 250}} >
                                    {client.username} <VerifiedUserIcon color={"success"} style={{verticalAlign: "bottom"}}/>
                                </Typography>
                            </Grid>
                            <Grid item>
                                {this.renderButtons()}
                            </Grid>
                        </Grid>
                        <Grid item container direction={"column"} justifyContent={"center"} alignItems={"flex-start"} alignContent={"center"} spacing={2}>
                            <Grid item>
                                <Typography variant={"p"} style={{fontWeight: 250}}>
                                    <EmailIcon color={"primary"} style={{verticalAlign: "bottom"}}/> {client.email}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"p"} style={{fontWeight: 250}}>
                                    <CakeIcon color={"primary"} style={{verticalAlign: "bottom"}}/> {this.renderBirthdate()}
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
}

const mapStateToProps = state => {
    return {client: state.authentication.client};
}

export default connect(mapStateToProps, {fetchClient})(ClientProfile);