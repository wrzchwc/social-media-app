import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {addPost} from "../../actions";
import {Button, Dialog, DialogContent, Grid, TextField, Typography} from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';
import CancelIcon from '@mui/icons-material/Cancel';

const PostAdd = props => {
    const [content, setContent] = useState('');
    const [contentHelper, setContentHelper] = useState('');


    useEffect(() => {
        if (props.touched && content.length === 0) {
            setContentHelper('Enter post content');
        } else {
            setContentHelper('');
        }
    }, [content, content.length, props.touched]);

    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            PaperProps={{style: {padding: "2em 0 2em 0", maxWidth: "90em"}}}
        >
            <DialogContent>
                <Grid container>
                    <Grid
                        item
                        container
                        justifyContent={"space-evenly"}
                        alignItems={"center"}
                        direction={"column"}
                        spacing={2}
                    >
                        <Grid item>
                            <Typography variant={"h3"}>NEW POST</Typography>
                        </Grid>
                        <Grid item style={{minWidth: "45em"}}>
                            <TextField
                                autoComplete={"off"}
                                color={"primary"}
                                error={props.touched && content.length === 0}
                                fullWidth
                                helperText={contentHelper}
                                id={"content"}
                                margin={"dense"}
                                multiline
                                onChange={event => {
                                    props.setTouched(true);
                                    setContent(event.target.value);
                                }}
                                placeholder={`What's on your mind ${props.name}?`}
                                rows={5}
                                variant={"outlined"}
                                value={content}
                                type={"text"}
                            >
                            </TextField>
                        </Grid>
                        <Grid item container alignItems={"center"} justifyContent={"center"} spacing={3}>
                            <Grid item>
                                <Button
                                    disabled={content.length === 0}
                                    endIcon={<PostAddIcon/>}
                                    onClick={() => {
                                        props.addPost(content);
                                        setContent('');
                                        props.onClose();
                                    }}
                                    variant={"contained"}
                                >
                                    ADD
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    color={"secondary"}
                                    endIcon={<CancelIcon/>}
                                    onClick={() => {
                                        setContent('');
                                        props.onClose();
                                    }}
                                    variant={"contained"}
                                >
                                    CANCEL
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}

export default connect(null, {addPost})(PostAdd);