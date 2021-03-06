import React from "react";
import {connect} from "react-redux";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import theme from "./ui/Theme"
import Header from "./ui/header/Header";
import Login from "./comoponents/Login";
import Wall from "./comoponents/posts/Wall";
import HomePage from "./comoponents/HomePage"
import Register from "./comoponents/Register";
import UserProfile from "./comoponents/ClientProfile";
import {ThemeProvider} from "@mui/material";
import {Footer} from "./ui/footer/Footer";

const App = ({isSignedIn}) => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={!isSignedIn ? <HomePage/> : <Navigate to="/api/posts"/>}/>
                    <Route path="/api/users/signin" element={!isSignedIn ? <Login/> : <Navigate to={-1}/>}/>
                    <Route path="/api/users/signup" element={!isSignedIn ? <Register/> : <Navigate to={-1}/>}/>
                    <Route path='/api/posts' element={isSignedIn ? <Wall/> : <Navigate to='/'/>}/>
                    <Route path='/api/users/me' element={isSignedIn ? <UserProfile/> : <Navigate to='/'/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

const mapStateToProps = state => {
    return {isSignedIn: state.authentication.isSignedIn}
}

export default connect(mapStateToProps)(App);