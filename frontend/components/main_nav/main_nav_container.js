import React from 'react';
import { connect } from 'react-redux';
import MainNav from './main_nav';
import { logout } from '../../actions/session';

const mSTP = state => ({
    // currentUser: state.users[session.id]
    currentUser: state.session.currentUser,
    // currentUser: state.entities.users[3],
    // currentUser: users[session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(MainNav);
