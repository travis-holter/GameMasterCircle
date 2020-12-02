import { connect } from 'react-redux';
import AnswerIndex from './answers_index';
import {
    fetchAnswersForQuestion,
    fetchAnswer,
    createAnswer,
    deleteAnswer,
    updateAnswer
}
    from '../../actions/answer'

const mSTP = (state, ownProps) => {
    return {
        answers: Object.values(state.entities.answers),
        questionId: ownProps.questionId,
        currentUser: state.session.currentUser,
        // currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = (dispatch) => ({
    fetchAnswersForQuestion: (questionId) => dispatch(fetchAnswersForQuestion(questionId)),
    fetchAnswer: (answerId) => dispatch(fetchAnswer(answerId)),
    createAnswer: (questionId, answer) => dispatch(createAnswer(questionId, answer)),
    deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
    updateAnswer: (answer) => dispatch(updateAnswer(answer))
});

export default connect(mSTP, mDTP)(AnswerIndex);