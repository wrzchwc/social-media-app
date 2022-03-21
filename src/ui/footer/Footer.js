import React from 'react';
import {makeStyles, useTheme} from "@mui/styles";
import {Button, Grid, Typography, useMediaQuery} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles = makeStyles(theme => ({
    cityLink: {
        color: theme.palette.common.cyan,
        fontWeight: "bolder",
        textDecoration: "none"
    },
    footer: {
        backgroundColor: theme.palette.common.violet,
        height: "5em",
        position: "relative",
        width: "100%",
        [theme.breakpoints.down('sm')]: {
            height: '4em'
        }
    },
    gridItem: {
        margin: "3em"
    }
}))

export const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const cityLink = "https://en.wikipedia.org/wiki/Wroc%C5%82aw";

    return (
        <footer className={classes.footer}>
            <Grid
                alignContent={"center"}
                container
                direction={"column"}
                justifyContent={"space-evenly"}
                sx={{
                    height: "100%",
                    position: "absolute"
                }}>
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Button
                                color={"secondary"}
                                endIcon={<HelpCenterIcon/>}
                                sx={{textTransform: "none"}}
                                variant={"text"}
                                size={matchesSM ? 'small' : undefined}
                            >
                                Help
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                color={"secondary"}
                                endIcon={<EmailIcon/>}
                                sx={{textTransform: "none"}}
                                variant={"text"}
                                size={matchesSM ? 'small' : undefined}
                            >
                                Contact
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                color={"secondary"}
                                component={"a"}
                                endIcon={<GitHubIcon/>}
                                href={"https://github.com/wrzchwc/social-media-app"}
                                sx={{textTransform: "none"}}
                                variant={"text"}
                                size={matchesSM ? 'small' : undefined}
                            >
                                GitHub
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item>
                    <Grid alignContent={"baseline"} container justifyContent={"center"}>
                        <Typography color={"secondary"} fontSize={"0.75rem"}>
                            Made with <FavoriteIcon fontSize={"0.75rem"} sx={{color: "red"}}/> in <a
                            className={classes.cityLink} href={cityLink}>Wrocław</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

        </footer>
    );
}