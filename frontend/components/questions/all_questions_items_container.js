import { connect } from 'react-redux';
import { fetchQuestion, fetchQuestions, createQuestion } from '../../actions/question';
import AllQuestionsIndex from './all_questions_index';
// import { fetchQuestions } from '../../actions/';

const mSTP = state => ({
    questions: Object.values(state.entities.questions), 
    currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchQuestion: questionId => dispatch(fetchQuestion(questionId)),
    createQuestion: question => dispatch(createQuestion(question))
})

export default connect(mSTP, mDTP)(AllQuestionsIndex);

