import React from 'react';
import Button from 'react-bootstrap/Button';
import AnswerIndexComponent from '../answers/answers_index_container';
import SideBarContainer from '../sidebar/sidebar_container';
import EditQuestionForm from './edit_question';
import Modal from 'react-modal';
import QuestionVotesContainer from '../votes/question_container';
import AskQuestion from './ask_question';
import ReactGA from 'react-ga'
import { Link } from 'react-router-dom'


class ShowQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            modalOpenForAsk: false,
        };

        this.changeModalStatus = this.changeModalStatus.bind(this);
        this.changeModalStatusForAsk = this.changeModalStatusForAsk.bind(this);
        // this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.questionId);
        Modal.setAppElement("#root");
    }

    fetchData(newId) {
        this.props.fetchQuestion(newId);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.questionId !== this.props.questionId) {
            this.fetchData(this.props.questionId);
        }
    }
    editAccess(currentUser, question) {
        if (!!currentUser && currentUser.id === question.author_id) {
            return (
                <Button
                    className="btn"
                    variant="info"
                    onClick={() => {
                        ReactGA.event({
                            category: "Edit Question",
                            action: "Click to edit a question",
                        });
                        return this.changeModalStatus(true);
                    }
                    }>
                    Edit Question
                </Button>
            );
        } else {
            return (
                <p className="btn">
                    You can only edit your own questions
                </p>
            );
        }
    }
    // goBack() {
    //     this.props.history.push('./questions');
    // }

    changeModalStatus(status) {
        this.setState({ modalIsOpen: status });
    }

    changeModalStatusForAsk(status) {
        this.setState({ modalOpenForAsk: status });
    }

    render() {
        const { question, currentUser, updateQuestion, createQuestion } = this.props;
        if (!question) {
            return null;
        }

        return (
            <div className="q-show-page">
                {/* <SideBarContainer /> */}
                <div>
                <Link to='/questions'
                        className='btn-back'
                        // id="back"
                     >Back to Questions Index
                  
                </Link>
                <div className="q-container">
                    <div className="q-title-div">
                        <h2 className="q-title">{question.title}</h2>
                    </div>
                    <div className="q-body-div">
                        <div className="q-vote-div">
                            <QuestionVotesContainer question={question} />
                            <p className="q-body">{question.body}</p>
                        </div>
                        {this.editAccess(currentUser, question)}
                    </div>
                    <div className="a-div">
                        <AnswerIndexComponent questionId={this.props.questionId} />
                    </div>
                </div>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={() => this.changeModalStatus(false)}
                    style={{
                        content: {
                            borderRadius: "7px",
                        },
                        overlay: {
                            position: "fixed",
                            zIndex: "50",
                        },
                    }}
                >
                    <Button className="edit-q-close" variant="info" onClick={() => this.changeModalStatus(false)}>
                        Close
                    </Button>
                    <EditQuestionForm
                        question={question}
                        updateQuestion={updateQuestion}
                        changeModalStatus={this.changeModalStatus}
                    />
                </Modal>
                <Modal
                    isOpen={this.state.modalOpenForAsk}
                    onRequestClose={() => this.changeModalStatusForAsk(false)}
                    style={{
                        content: {
                            borderRadius: "7px",
                        },
                        overlay: {
                            position: "fixed",
                            zIndex: "50",
                        },
                    }}
                >
                    <Button className="ask-q-close" variant="info" onClick={() => this.changeModalStatusForAsk(false)}>
                        Close
                    </Button>
                    <AskQuestion
                        currentUser={currentUser}
                        createQuestion={createQuestion}
                        changeModalStatusForAsk={this.changeModalStatusForAsk}
                    />
                </Modal>
            </div>
        );
    }
}

export default ShowQuestion;