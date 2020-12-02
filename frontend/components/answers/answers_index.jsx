import React from 'react';
import AnswerItem from './answers_item';
import ListGroup from 'react-bootstrap/ListGroup';
import AnswerContainer from './new_answer_container';

class AnswerIndex extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.fetchAnswersForQuestion(this.props.questionId);
    }
    fetchData(newId) {
        this.props.fetchAnswersForQuestion(newId);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.questionId !== this.props.questionId) {
            this.fetchData(this.props.questionId);
        }
    }
    render() {
        const { answers,
            deleteAnswer,
            updateAnswer,
            currentUser,
            questionId,
        } = this.props;
        return (
            <div>
                <h1 className="answers">Answers</h1>
                <ListGroup variant="flush">
                    {answers.map((answer) => (
                        <AnswerItem key={answer.id}
                            answer={answer}
                            currentUser={currentUser}
                            deleteAnswer={deleteAnswer}
                            updateAnswer={updateAnswer}
                            questionId={questionId}
                        />
                    ))}
                </ListGroup>
                <AnswerContainer questionId={this.props.questionId} />
            </div>
        );
    }
}

export default AnswerIndex;