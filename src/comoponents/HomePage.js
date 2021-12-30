import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

const HomePage = props => {
    const navigate = useNavigate();

    useEffect(() => {
        if (props.isSignedIn) {
            navigate('/api/posts')
        }
    })

    return (
        <div style={{float: "right"}}>
            Hi friend!
            Click login or register button ☝🏼
        </div>
    );
}

const mapStateToProps = state => {
    return {isSignedIn: state.authentication.isSignedIn};
}

export default connect(mapStateToProps)(HomePage);