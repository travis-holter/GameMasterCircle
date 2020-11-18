import { combineReducers } from 'redux';
import users from './user';
import questions from './questions';
import answers from './answers';

export default combineReducers({
    users,
    questions,
    answers,
});