import React from "react";

const Register = () => {
    return (
        <div>
            <div>Register</div>
            <label>name</label>
            <input type="text"/>
            <br/>
            <label>surname</label>
            <input type="text"/>
            <br/>
            <label>email</label>
            <input type="text"/>
            <br/>
            <label>birthdate</label>
            <br/>
            <label>username</label>
            <input type="text"/>
            <br/>
            <label>password</label>
            <input type="password"/>
            <br/>
            <button>REGISTER</button>
        </div>
    );
}

export default Register;