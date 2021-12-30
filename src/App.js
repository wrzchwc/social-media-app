import React from "react";
import Header from "./ui/header/Header";
import {ThemeProvider} from "@mui/material";
import theme from "./ui/Theme"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./comoponents/HomePage"
import Login from "./comoponents/Login";
import Register from "./comoponents/Register";
import Wall from "./comoponents/Wall";
import UserProfile from "./comoponents/UserProfile";
import PostAdd from "./comoponents/PostAdd";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/api/users/signin" element={<Login/>}/>
                    <Route path="/api/users/signup" element={<Register/>}/>
                    <Route path='/api/posts' element={<Wall/>}/>
                    <Route path='/api/users/me' element={<UserProfile/>}/>
                    <Route path='/api/posts/add' element={<PostAdd/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;