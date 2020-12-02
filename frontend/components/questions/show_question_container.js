import { connect } from 'react-redux';
import ShowQuestion from './show_question';
import { fetchQuestion, updateQuestion, createQuestion } from '../../actions/question';

const mSTP = (state, ownProps) => {

    return {
        question: state.entities.questions[ownProps.match.params.questionId],
        questionId: ownProps.match.params.questionId,
        currentUser: state.session.currentUser,
    }
};

const mDTP = (dispatch) => ({
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    createQuestion: (question) => dispatch(createQuestion(question))

});

export default connect(mSTP, mDTP)(ShowQuestion);
