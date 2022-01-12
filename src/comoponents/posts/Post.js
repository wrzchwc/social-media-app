import React from 'react';
import {connect} from "react-redux";
import {likePost} from "../../actions";
import {Grid, IconButton, TextField, Typography} from "@mui/material";
import {makeStyles, useTheme} from "@mui/styles";
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
    },
    commentsNumber: {
        color: theme.palette.info.main,
        fontWeight: 550
    },
    likesNumber:{
        color: theme.palette.error.main,
        fontWeight: 550
    }
}));

const Post = props => {
    const classes = useStyles();
    const theme = useTheme();

    const getPublicationDateFormatted = () => {
        let {publicationDate} = {props};
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
                    <Typography fontSize={"large"}>{props.post.authorUsername}</Typography>
                </Grid>
                <Grid item>
                    <EditAttributesIcon color={props.post.isEdited ? 'success' : 'disabled'}/>
                </Grid>
            </Grid>
            <Grid item>
                <TextField
                    fullWidth
                    InputProps={{readOnly: true}}
                    multiline
                    type={"text"}
                    value={props.post.content}
                    variant={"outlined"}
                >
                </TextField>
            </Grid>
            <Grid item>
                <Typography variant={"caption"}>{getPublicationDateFormatted()}</Typography>
            </Grid>
            <Grid item container justifyContent={"flex-end"} alignItems={"center"}>
                <Grid item>
                    <IconButton color={"error"} onClick={()=>{props.likePost(props.post.id)}}>
                        <FavoriteBorderIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography variant={"p"} className={classes.likesNumber}>
                        {props.post.usersLikes !== null ? props.post.usersLikes.length : null}
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton color={"info"}>
                        <CommentIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography variant={"p"} className={classes.commentsNumber}>
                        {props.post.comments !== null ? props.post.comments.length : null}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );

}

export default connect(null, {likePost})(Post);