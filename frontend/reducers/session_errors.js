import {
    RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS
} from '../actions/session';

const _noErrors = [];

export default (oldState = _noErrors, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return _noErrors;
        case RECEIVE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return _noErrors;
        default:
            return oldState;
    }
};