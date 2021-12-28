import React from "react";
import {AppBar, Toolbar, useScrollTrigger} from "@mui/material";

const ElevationScroll = props => {
    const {children} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Header = () => {
    return (
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar>
                    Social Media App
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );

}

export default Header;