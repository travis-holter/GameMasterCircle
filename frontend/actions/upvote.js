import * as APIUtil from '../utils/upvote';
export const UPDATE_UPVOTE = 'UPDATE_UPVOTE';
export const UPDATE_ANSWER_UPVOTE = 'UPDATE_ANSWER_UPVOTE';

const updateUpvote = vote => {
    return {
        type: UPDATE_UPVOTE,
        vote
    }
};

const updateAnswerUpvote = vote => {
    return {
        type: UPDATE_ANSWER_UPVOTE,
        vote
    }
}

export const createUpvote = (questionId, answerId = 0) => (dispatch) => {
    return APIUtil.createUpvote(questionId, answerId)
        .then(updatedUpvotes => dispatch(updateUpvote(updatedUpvotes)))
};

export const createAnswerUpvote = (questionId, answerId) => (dispatch) => {
    return APIUtil.createUpvote(questionId, answerId)
        .then(updatedUpvotes => dispatch(updateAnswerUpvote(updatedUpvotes)))
};

export const deleteUpvote = (questionId) => (dispatch) => {
    return APIUtil.deleteUpvote(questionId)
        .then(updatedUpvotes => dispatch(updateUpvote(updatedUpvotes)))
};


