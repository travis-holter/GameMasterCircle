import { RECEIVE_CURRENT_USER } from '../actions/session';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser;
            return nextState
            // return Object.assign({}, state, { [action.user.id]: action.user });
        default:
            return state;
    }
};

export default usersReducer;
