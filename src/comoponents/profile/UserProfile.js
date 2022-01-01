import React from "react";
import './UserProfile.css';
import {connect} from "react-redux";

const UserProfile = ({client}) => {
    const getNameSurnameFormatted = () => {
        let name = client.name.charAt(0).toUpperCase()+client.name.slice(1);
        let surname = client.surname.charAt(0).toUpperCase()+client.surname.slice(1);
        return name + ' ' + surname;
    }

    return (
        <div className="flex justified">
            <div>
                <div className="flex center-aligned justified">
                    <h2>{getNameSurnameFormatted()}</h2>
                </div>
                <p>
                    <b>username </b>
                    {`${client.username}`}
                </p>
                <p>
                    <b>email </b>
                    {`${client.email}`}
                </p>
                <p>
                    <b>birthdate </b>
                    {`${client.dateOfBirth[2]}.${client.dateOfBirth[1]}.${client.dateOfBirth[0]}`}
                </p>
                <div className="flex" style={{justifyContent: 'space-around'}}>
                    <button>{`${client.followers.length}`} followers</button>
                    <button>{`${client.following.length}`} following</button>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = state => {
    return {client: state.authentication.client}
}

export default connect(mapStateToProps)(UserProfile);