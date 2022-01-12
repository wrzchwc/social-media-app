import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../../actions";
import {Grid} from "@mui/material";
import Post from "./Post";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: "89vh"
    }
}));

const Wall = ({posts, fetchPosts}) => {
    const classes = useStyles();
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <Grid container className={classes.container} direction={"column"}>
            <Grid item container justifyContent={"center"} style={{margin: "2em 0 2em 0"}}>
                <Post/>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {posts: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(Wall);