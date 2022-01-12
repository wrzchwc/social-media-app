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

    const renderPosts = () => {
        return posts.map(post => {
            return (
                <Post
                    authorUsername={post.authorUsername}
                    content={post.content}
                    isEdited={post.isEdited}
                    key={post.id}
                    publicationDate={post.publicationDate}
                />
            );
        })
    }

    return (
        <Grid container className={classes.container} direction={"row"} justifyContent={"center"}>
            <Grid
                item
                container
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                style={{margin: "1em 0 1em 0"}}
                xs={7}
            >
                {renderPosts()}
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {posts: Object.values(state.posts)};
}

export default connect(mapStateToProps, {fetchPosts})(Wall);