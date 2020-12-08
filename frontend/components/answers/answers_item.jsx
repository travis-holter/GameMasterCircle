import React, { useState } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import EditAnswerForm from './edit_answer';
import AnswerVotesContainer from '../votes/answer_container';
import ReactGA from 'react-ga';


const AnswerItem = ({ answer, deleteAnswer, updateAnswer, currentUser, questionId }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    if (!currentUser) {
        return (
            <ListGroupItem className="single-answer">
                <div className="a-votes">
                    <AnswerVotesContainer
                        questionId={questionId}
                        answer={answer}
                    />
                    <p className="a-body">{answer.body}</p>
                </div>
            </ListGroupItem>
        )
    } else {
        return (
            <ListGroupItem className="single-answer">
                {
                    (currentUser.id === answer.author_id && !!currentUser) ?
                        (
                            <div>
                                <div className="a-votes-container">
                                    <AnswerVotesContainer className="btn"
                                        questionId={questionId}
                                        answer={answer}
                                    />
                                    <p className="a-body">{answer.body}</p>
                                </div>
                                <div >
                                    <Button onClick={() => {
                                        ReactGA.event({
                                            category: "Delete Answer",
                                            action: "Click to delete an answer",
                                        });
                                        return deleteAnswer(answer.id);
                                    }
                                    }
                                        className="btn"
                                        variant="secondary">Delete Answer
                    </Button>
                                    <Button className="edit-answer-btn"
                                        variant="info"
                                        onClick={() => {
                                            ReactGA.event(
                                                {
                                                    category: "Edit Answer",
                                                    action: "Click to edit an answer",
                                                }
                                            );
                                            return setModalIsOpen(true)
                                        }
                                        }
                                    >
                                        Edit Answer
                    </Button>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className="a-votes">
                                <AnswerVotesContainer
                                    questionId={questionId}
                                    answer={answer}
                                />
                                <p className="a-body">{answer.body}</p>
                            </div>
                        )
                }
                <Modal isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={{
                        content: {
                            borderRadius: "10px",
                        },
                        overlay: {
                            position: "fixed",
                            zIndex: "50",
                        },
                    }}
                >
                    <Button className="edit-close"
                        onClick={() => setModalIsOpen(false)}
                        variant="secondary">
                        Close
                    </Button>
                    <EditAnswerForm answer={answer}
                        updateAnswer={updateAnswer}
                        setModalIsOpen={setModalIsOpen}
                    />
                </Modal>
            </ListGroupItem>
        )
    }


}

export default AnswerItem;