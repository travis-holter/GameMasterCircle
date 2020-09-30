import React from 'react';
import { connect } from 'react-redux';
import SignIn from './login';
import { Link } from 'react-router-dom';
import { login, clearErrors } from "../../actions/session";

const mSTP = (state) => {
    return {
        errors: state.errors,
        formType: 'login',
        navLink: <Link to="/signup">Sign Up</Link>,
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        login: formUser => dispatch(login(formUser)),
    };
};

export default connect(mSTP, mDTP)(SignIn);