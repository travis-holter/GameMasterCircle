import { combineReducers } from 'redux';
import users from './user';
import questions from './questions';

export default combineReducers({
    users,
    questions,
});