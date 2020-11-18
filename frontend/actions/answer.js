import * as APIUtil from '../utils/answer';
export const RECEIVE_QUESTION_ANSWERS = 'RECEIVE_QUESTION_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

const receiveAnswers = (answers) => ({
    type: RECEIVE_QUESTION_ANSWERS,
    answers
});

const receiveAnswer = (answer) => ({
    type: RECEIVE_ANSWER,
    answer
});

const removeAnswer = (answerId) => ({
    type: REMOVE_ANSWER,
    answerId
});

export const fetchAnswersForQuestion = (questionId) => dispatch => (
    APIUtil.fetchAnswersForQuestion(questionId)
        .then(answers => dispatch(receiveAnswers(answers)))
);

export const fetchAnswer = (answerId) => dispatch => (
    APIUtil.fetchAnswer(answerId)
        .then(answer => dispatch(receiveAnswer(answer)))
);

export const createAnswer = (questionId, answer) => dispatch => (
    APIUtil.createAnswer(questionId, answer)
        .then(createdAnswer => dispatch(receiveAnswer(createdAnswer)))
);

export const updateAnswer = (answer) => (dispatch) => (
    APIUtil.updateAnswer(answer)
        .then(updatedAnswer => dispatch(receiveAnswer(updatedAnswer)))
);

export const deleteAnswer = (answerId) => (dispatch) => (
    APIUtil.deleteAnswer(answerId)
        .then(() => dispatch(removeAnswer(answerId)))
);