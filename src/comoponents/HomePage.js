import React from "react";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import {makeStyles, useTheme} from '@mui/styles';

const useStyles = makeStyles(theme => ({
    mainTypography: {
        [theme.breakpoints.down('md')]: {
            fontSize: '2.25em'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2em'
        }
    }
}))

const HomePage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container style={{minHeight: "89vh"}}>
            <Grid
                item
                container
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
            >
                <Grid item>
                    <Typography
                        variant={"h2"}
                        style={{
                            fontWeight: 300,
                            fontSize: matchesSM ? '1.5rem' : matchesMD ? '1.75rem' : undefined
                        }}
                        gutterBottom
                        className={classes.mainTypography}
                    >
                        Hi Friend! <EmojiPeopleIcon color={"secondary"} fontSize={"inherit"}/>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant={"h3"}
                        style={{fontSize: matchesSM ? '1.5rem' : matchesMD ? '1.75rem' : undefined}}
                    >
                        Click login or register and join Us!</Typography>
                </Grid>

            </Grid>

        </Grid>
    );
}

export default HomePage;