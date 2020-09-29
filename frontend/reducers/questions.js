import {
    RECEIVE_ALL_QUESTIONS,
    RECEIVE_QUESTION
} from '../actions/question';

const QuestionReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return action.questions;
        case RECEIVE_QUESTION:
            let nextState = Object.assign({}, oldState);
            nextState[action.question.id] = action.question;
            return nextState;
        default:
            return oldState;
    }
}

export default QuestionReducer;