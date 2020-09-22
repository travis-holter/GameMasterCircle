import React from 'react';
import { connect } from 'react-redux';
import SignIn from './login';
import { Link } from 'react-router-dom';
import { login } from "../../actions/session";

const mSTP = ({ errors }) => {
    return {
        formType: 'login',
        navLink: <Link to="/signup">Sign Up</Link>,
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mSTP, mDTP)(SignIn);