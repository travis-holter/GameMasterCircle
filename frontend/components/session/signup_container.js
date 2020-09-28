import { connect } from 'react-redux';
import { createNewUser, clearErrors, login } from "../../actions/session";
import Signup from './signup';

const mSTP = state => {
    return {
    errors: state.errors
    }
}

const mDTP = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    clearErrors: () => dispatch(clearErrors()),
    login: formUser => dispatch(login(formUser)),
});

export default connect(mSTP, mDTP)(Signup);