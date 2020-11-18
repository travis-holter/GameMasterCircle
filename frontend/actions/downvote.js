import * as APIUtil from '../utils/downvote';
export const UPDATE_DOWNVOTE = 'UPDATE_DOWNVOTE';
export const UPDATE_ANSWER_DOWNVOTE = 'UPDATE_ANSWER_DOWNVOTE';

const updateDownvote = vote => ({
    type: UPDATE_DOWNVOTE,
    vote
});

const updateAnswerDownvote = vote => ({
    type: UPDATE_ANSWER_DOWNVOTE,
    vote
});

export const createDownvote = (questionId, answerId = 0) => (dispatch) => {
    return APIUtil.createDownvote(questionId, answerId)
        .then(updatedDownvotes => dispatch(updateDownvote(updatedDownvotes)))
};

export const createAnswerDownvote = (questionId, answerId) => (dispatch) => {
    return APIUtil.createDownvote(questionId, answerId)
        .then(updatedDownvotes => dispatch(updateAnswerDownvote(updatedDownvotes)))
};

export const deleteDownvote = (questionId) => (dispatch) => {
    return APIUtil.deleteDownvote(questionId)
        .then(updatedDownvotes => dispatch(updateDownvote(updatedDownvotes)))
};
