import {createTheme} from "@mui/material";

const socialViolet = "#7E007B";
const socialCyan = "#DAF0EE";

export default createTheme({
    palette: {
        common: {
            violet: `${socialViolet}`,
            cyan: `${socialCyan}`
        },
        primary: {
            main: `${socialViolet}`
        },
        secondary: {
            main: `${socialCyan}`
        }
    },
    typography: {
        tab:{
            fontSize: "1rem",
            fontWeight: 700,
            textTransform: "none"
        },
        h2: {
            color: socialViolet
        },
        h3:  {
            color: socialViolet,
            fontWeight: 250
        }
    }
});