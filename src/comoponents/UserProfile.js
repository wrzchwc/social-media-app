import React from "react";
import '../styles/Layout.css';
import {connect} from "react-redux";
import {fetchSignedUser} from "../actions";
import getMonth from './getMonth';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchSignedUser();
    }

    renderButtons() {
        let {followers, following} = this.props.client;
        try {
            return (
                <div className="flex" style={{justifyContent: 'space-around'}}>
                    <button>{`${followers.length} followers`}</button>
                    <button>{`${following.length} following`}</button>
                </div>
            );
        } catch (e) {
        }
    }

    renderBirthdate() {
        let {dateOfBirth} = this.props.client;
        try {
            return `${dateOfBirth[2]} ${getMonth(dateOfBirth[1])} ${dateOfBirth[0]}`;
        } catch (e) {
        }
    }

    render() {
        let {client} = this.props;

        return (
            <div className="flex center-justified center-aligned">
                <div>
                    <div className="flex center-aligned center-justified">
                        <h2>{`${client.name} ${client.surname}`}</h2>
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
                        {this.renderBirthdate()}
                    </p>
                    {this.renderButtons()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {client: state.authentication.client};
}

export default connect(mapStateToProps, {fetchSignedUser})(UserProfile);