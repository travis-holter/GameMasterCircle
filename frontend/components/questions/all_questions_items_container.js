import { connect } from 'react-redux';
import { fetchQuestion, fetchQuestions } from '../../actions/question';
import AllQuestionsIndex from './all_questions_index';
// import { fetchQuestions } from '../../actions/';

const mSTP = state => ({
    questions: Object.values(state.entities.questions)
})

const mDTP = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchQuestion: questionId => dispatch(fetchQuestion(questionId))
})

export default connect(mSTP, mDTP)(AllQuestionsIndex);

