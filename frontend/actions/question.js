import * as APIUtil from '../utils/question';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

const receiveQuestions = questions => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
});

const receiveQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
});

export const fetchQuestions = () => dispatch => {
    return(
        APIUtil.fetchQuestions()
        .then(questions => dispatch(receiveQuestions(questions)))
    )
};

export const fetchQuestion = questionId => dispatch => {
    return (
        APIUtil.fetchQuestion(questionId)
            .then(question => dispatch(receiveQuestion(question)))
    )
};

export const createQuestion = (question) => (dispatch) => {
    return APIUtil.createQuestion(question)
        .then(question => dispatch(receiveQuestion(question)))
};