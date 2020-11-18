import * as APIUtil from '../utils/question';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

const receiveQuestions = questions => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
});

const receiveQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
});

const removeQuestion = questionId => ({
    type: REMOVE_QUESTION,
    questionId
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

export const updateQuestion = (question) => (dispatch) => (
    QuestionApiUtil.updateQuestion(question)
        .then(updatedQuestion => dispatch(receiveQuestion(updatedQuestion)))
);

export const deleteQuestion = (questionId) => (dispatch) => (
    QuestionApiUtil.deleteQuestion(questionId)
        .then(() => dispatch(removeQuestion(questionId)))
);