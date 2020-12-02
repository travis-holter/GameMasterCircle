import { connect } from 'react-redux';
import NewAnswer from './new_answer';
import { createAnswer } from '../../actions/answer';

const mSTP = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    questionId: ownProps.questionId
});

const mDTP = (dispatch) => ({
    createAnswer: (questionId, answer) => dispatch(createAnswer(questionId, answer))
});

export default connect(mSTP, mDTP)(NewAnswer);