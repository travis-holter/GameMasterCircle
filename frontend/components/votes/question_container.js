import { connect } from 'react-redux';
import QuestionVotes from './question';
import { createUpvote, deleteUpvote } from '../../actions/upvote';
import { createDownvote, deleteDownvote } from '../../actions/downvote';

const mSTP = (state, ownProps) => {
    return {
        questionId: ownProps.question.id,
        currentUser: state.session.currentUser
    }
};

const mDTP = (dispatch) => ({
    createUpvote: (questionId) => dispatch(createUpvote(questionId)),
    deleteUpvote: (questionId) => dispatch(deleteUpvote(questionId)),
    createDownvote: (questionId) => dispatch(createDownvote(questionId)),
    deleteDownvote: (questionId) => dispatch(deleteDownvote(questionId))
});

export default connect(mSTP, mDTP)(QuestionVotes);
