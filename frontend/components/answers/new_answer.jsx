import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class NewAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit() {
        this.props.createAnswer(this.props.questionId, this.state)
            .then(() => {
                return this.resetAnswerTextbox();
            });
    }

    resetAnswerTextbox() {
        this.setState({ body: "" });
    }

    loggedIn() {
        return (
            <div>
                <h2 className="your-answer-header">Your Answer</h2>
                <form onSubmit={this.handleSubmit}>
                    <textarea className="new-answer-body"
                        cols="30"
                        rows="10"
                        onChange={this.update("body")} />
                    <Button variant="success" type="submit">Post Your Answer</Button>
                </form>
            </div>
        );
    }

    notLoggedIn() {
        return (
            <div>
                <h2 className="your-answer-header">Your Answer</h2>
                <Link to="/login">
                    <Button variant="primary">Log In to Answer</Button>
                </Link>
            </div>
        );
    }


    render() {
        const { currentUser } = this.props;

        return (
            <div className="answer-component">
                {
                    currentUser ? this.loggedIn() : this.notLoggedIn()
                }
            </div>
        )
    }

}

export default NewAnswer;
