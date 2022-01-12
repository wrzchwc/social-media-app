import React from 'react';
import {Box, Grid, IconButton, TextField, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import getMonth from "../../util/months";

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.common.cyan,
        border: `3px solid ${theme.palette.common.violet}`,
        borderRadius: "5px",
        padding: "1em",
        width: "100%"
    }
}));

const Post = ({content, isEdited, publicationDate, ...props}) => {
    const classes = useStyles();

    const getPublicationDateFormatted = () => {
        try {
            let day = publicationDate[2];
            let month = getMonth(publicationDate[1]);
            let year = publicationDate[0];
            let hour = publicationDate[3];
            let minutes = publicationDate[4] < 10 ? '0'.concat(publicationDate[4]) : publicationDate[4];
            return `${day} ${month} ${year}, at ${hour}:${minutes}`;
        } catch (e) {
            return null;
        }
    }

    return (
        <Grid container item direction={"column"} className={classes.container} style={{marginTop: "1em"}}>
            <Grid item container justifyContent={"space-between"} alignItems={"center"}>
                <Grid item>
                    <Typography fontSize={"large"}>{props.authorUsername}</Typography>
                </Grid>
                <Grid item>
                    <EditAttributesIcon color={isEdited ? 'success' : 'disabled'}/>
                </Grid>
            </Grid>
            <Grid item>
                <TextField
                    fullWidth
                    InputProps={{readOnly: true}}
                    multiline
                    type={"text"}
                    value={content}
                    variant={"outlined"}
                >
                </TextField>
            </Grid>
            <Grid item>
                <Typography variant={"caption"}>{getPublicationDateFormatted()}</Typography>
            </Grid>
            <Grid item container justifyContent={"flex-end"}>
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
            </Grid>
        </Grid>
    );

}

export default Post;