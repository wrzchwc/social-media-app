import React from "react";
import {Navigate} from 'react-router-dom';

const RequireAuth = ({children, isSignedIn, redirection}) => {
    return isSignedIn ? children : <Navigate to={redirection}/>;
}

export default RequireAuth;