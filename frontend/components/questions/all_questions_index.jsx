import React from 'react';
import SideBar from '../sidebar/sidebar';
import QuestionItem from './question_item';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import AskQuestion from './ask_question';

class AllQuestionsIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
        }
        this.changeModal = this.changeModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestions();
        Modal.setAppElement("#root");
    }

    changeModal(status) {
        this.setState({ modal: status });
    }

    render() {
        if(!this.props.questions) return null;
        return (
            <div className='questions-page'>
                <SideBar />
                <div className='questions-index'>
                        <div className='question-index-top'>
                            <h1 className='top-questions'>Top Questions</h1>
                            <Button className='btn-blue'
                                variant="warning"
                                onClick={() => {
                                        this.changeModal(true) 
                                }
                                }
                                 >Ask Question
                            </Button>
                        </div>
                        <ul className='question-list'>
                            {this.props.questions.map(question => {
                                return(
                                    <QuestionItem question={question}
                                    key={question.id}/>
                                )
                            })}
                        </ul>
                        <Modal
                            isOpen={this.state.modal}
                            onRequestClose={() => this.changeModal(false)}
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
                            <Button variant="info" onClick={() => this.changeModal(false)}>
                                Close
                            </Button>
                            <AskQuestion 
                                currentUser={this.props.currentUser}
                                createQuestion={this.props.createQuestion}
                                changeModal={this.changeModal}
                            />
                        </Modal>
                </div>
            </div>
        )
    }

}

export default AllQuestionsIndex;