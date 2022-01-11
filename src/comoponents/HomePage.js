import React from "react";
import {Grid, Typography} from "@mui/material";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const HomePage = () => {
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
                    <Typography variant={"h2"} style={{fontWeight: 300}}>
                        Hi Friend! <EmojiPeopleIcon color={"secondary"} fontSize={"inherit"}/>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant={"h3"}>Click login or register and join Us!</Typography>
                </Grid>

            </Grid>

        </Grid>
    );
}

export default HomePage;