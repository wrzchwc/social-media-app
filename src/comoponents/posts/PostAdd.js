import React from "react";
import {connect} from "react-redux";
import {Button, Dialog, DialogContent, Grid, TextField, Typography} from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';

const PostAdd = props => {
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
                        spacing={1}
                    >
                        <Grid item>
                            <Typography variant={"h3"}>NEW POST</Typography>
                        </Grid>
                        <Grid item style={{minWidth: "45em"}}>
                            <TextField
                                autoComplete={"off"}
                                color={"primary"}
                                fullWidth
                                id={"content"}
                                margin={"dense"}
                                multiline
                                placeholder={`What's on your mind ${props.name}?`}
                                rows={5}
                                variant={"outlined"}
                                type={"text"}
                            >
                            </TextField>
                        </Grid>
                        <Grid item>
                            <Button endIcon={<PostAddIcon/>} variant={"contained"}>ADD</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}

const mapStateToProps = state => {
    return {name: state.authentication.client.name}
}

export default connect(mapStateToProps)(PostAdd);