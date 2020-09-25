import React from 'react';
import { connect } from 'react-redux';
import Home from './home';
import { login } from "../../actions/session";

const mSTP = (state) => {
    return {
        errors: state.errors,
        formType: 'login',
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mSTP, mDTP)(Home);