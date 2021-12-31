import React from "react";
import {connect} from "react-redux";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import theme from "./ui/Theme"
import Header from "./ui/header/Header";
import Login from "./comoponents/authentication/Login";
import PostAdd from "./comoponents/posts/PostAdd";
import Wall from "./comoponents/posts/Wall";
import HomePage from "./comoponents/HomePage"
import Register from "./comoponents/Register";
import UserProfile from "./comoponents/UserProfile";
import {ThemeProvider} from "@mui/material";
import RequireAuth from "./comoponents/authentication/RequireAuth";

const App = ({isSignedIn}) => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={!isSignedIn ? <HomePage/> : <Navigate to="/api/posts"/>}/>
                    <Route path="/api/users/signin" element={<Login/>}/>
                    <Route path="/api/users/signup" element={<Register/>}/>
                    <Route
                        path='/api/posts'
                        element={
                            <RequireAuth isSignedIn={isSignedIn} redirection={'/'}>
                                <Wall/>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path='/api/users/me'
                        element={
                            <RequireAuth isSignedIn={isSignedIn} redirection={'/'}>
                                <UserProfile/>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path='/api/posts/add'
                        element={
                            <RequireAuth isSignedIn={isSignedIn} redirection={'/'}>
                                <PostAdd/>
                            </RequireAuth>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

const mapStateToProps = state => {
    return {isSignedIn: state.authentication.isSignedIn}
}

export default connect(mapStateToProps)(App);