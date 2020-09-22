import { combineReducers } from 'redux';
import sessionReducer from './session';
import usersReducer from './user';

export default combineReducers({
    session: sessionReducer,
    user: usersReducer,
});
