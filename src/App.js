import React from "react";
import Header from "./ui/Header";
import {ThemeProvider} from "@mui/material";
import theme from "./ui/Theme"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./comoponents/HomePage"
import Login from "./comoponents/Login";
import Register from "./comoponents/Register";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/api/users/signin" element={<Login/>}/>
                    <Route path="/api/users/signup" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;