import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class EditQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit() {
        this.props.updateQuestion(this.state)
            .then(() => this.props.changeModalStatus(false));
    }

    render() {
        return (
            <div className="q-wrapper" >
                <Jumbotron className="edit-q-flex">
                    <h2 className="edit-q-header">Update Question</h2>
                    <form className="edit-q-form" onSubmit={this.handleSubmit}>
                        <label>Title</label>
                        <textarea type="text"
                            className="edit-q-title"
                            value={this.state.title}
                            onChange={this.update("title")}
                        />
                        <br />
                        <label className="edit-question-body">Body</label>
                        <textarea className="edit-question-body-area"
                            type="text"
                            value={this.state.body}
                            onChange={this.update("body")}
                        />
                        <br />
                        <Button variant="primary" className="btn" type="submit">Update question</Button>
                    </form>
                </Jumbotron>
            </div >
        )
    }


}

export default EditQuestionForm;