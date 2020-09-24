import { connect } from 'react-redux';
import { createNewUser, clearErrors } from "../../actions/session";
import Signup from './signup';

const mSTP = state => ({
    errors: state.errors
})

const mDTP = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(Signup);