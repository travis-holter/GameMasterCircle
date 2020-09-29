import React from 'react';

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
            <div className='questions-index'>
                    {this.props.questions.map(question => {
                        return(<>
                        <h3>{question.title}</h3>
                        <p>{question.body}</p>
                        </>)
                    })}
            </div>
        )
    }

}

export default AllQuestionsIndex;