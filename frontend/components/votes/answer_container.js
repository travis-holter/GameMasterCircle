import { connect } from 'react-redux';
import AnswerVotes from './answer';
import { createAnswerUpvote, deleteUpvote } from '../../actions/upvote';
import { createAnswerDownvote, deleteDownvote } from '../../actions/downvote';

const mSTP = (state, ownProps) => {
    return {
        questionId: ownProps.questionId,
        answer: ownProps.answer,
        currentUser: state.session.currentUser,
    }
};

const mDTP = (dispatch) => ({
    createAnswerUpvote: (questionId, answerId) => dispatch(createAnswerUpvote(questionId, answerId)),
    deleteUpvote: (questionId) => dispatch(deleteUpvote(questionId)),
    createAnswerDownvote: (questionId, answerId) => dispatch(createAnswerDownvote(questionId, answerId)),
    deleteDownvote: (questionId) => dispatch(deleteDownvote(questionId))
});

export default connect(mSTP, mDTP)(AnswerVotes);