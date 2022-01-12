import React from 'react';
import {Box, Grid, IconButton, TextField, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.common.cyan,
        border: `3px solid ${theme.palette.common.violet}`,
        borderRadius: "5px",
        height: "100%",
        padding: "1em",
        width: "100%"
    }
}));

const Post = props => {
    const classes = useStyles();

    return (
        <Grid container item direction={"column"} xs={7} className={classes.container} spacing={1}>
            <Grid item container justifyContent={"space-between"} alignItems={"space-evenly"}>
                <Grid item direction={"column"}>
                    <Grid conainer direction={"column"} spacing={1}>
                        <Grid item>
                            <Typography fontSize={"large"}>username</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"caption"}>date</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item alignSelf={"center"}>
                    <EditAttributesIcon color={"disabled"}/>
                </Grid>
            </Grid>
            <Grid item>
                <TextField
                    fullWidth
                    InputProps={{readOnly: true}}
                    multiline
                    type={"text"}
                    value={"Post content"}
                    variant={"outlined"}
                >
                </TextField>
            </Grid>
            <Grid item container justifyContent={"flex-end"} spacing={1}>
                <Grid item>
                    <IconButton color={"error"}>
                        <FavoriteBorderIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton color={"info"}>
                        <CommentIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography>

                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );

}

export default Post;