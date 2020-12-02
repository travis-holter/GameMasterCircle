import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class EditAnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.answer;
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit() {
        this.props.updateAnswer(this.state);
        this.props.setModalIsOpen(false);
    }

    render() {
        return (
            <div className="wrapper">
                <Jumbotron className="edit-answer-flex">
                    <h2 className="edit-answer-header">Update Answer</h2>
                    <form className="edit-a-form" onSubmit={this.handleSubmit}>
                        <label className="edit-answer-body">Body</label>
                        <textarea className="edit-answer-body-area"
                            type="text"
                            value={this.state.body}
                            onChange={this.update("body")}
                        />
                        <br />
                        <Button variant="primary" className="btn" type="submit">Update answer</Button>
                    </form>
                </Jumbotron>
            </div>
        )
    }

}

export default EditAnswerForm;