import React from "react";
import Header from "./ui/Header";
import {ThemeProvider} from "@mui/material";
import theme from "./ui/Theme"

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <Header/>
          Hi friend!
          Click login or register button ☝🏼
      </ThemeProvider>
  );
}

export default App;