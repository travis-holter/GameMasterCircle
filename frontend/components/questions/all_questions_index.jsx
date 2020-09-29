import React from 'react';
import SideBar from '../sidebar/sidebar';
import QuestionItem from './question_item';

class AllQuestionsIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        if(!this.props.questions) return null;
        return (
            <div className='questions-page'>
                <SideBar />
                <div className='questions-index'>
                        <div className='question-index-top'>
                            <h1 className='top-questions'>Top Questions</h1>
                            <button className='btn-blue'>Ask Question</button>
                        </div>
                        <ul className='question-list'>
                            {this.props.questions.map(question => {
                                return(
                                    <QuestionItem question={question}
                                    key={question.id}/>
                                )
                            })}
                        </ul>
                </div>
            </div>
        )
    }

}

export default AllQuestionsIndex;