import React from 'react';

class AskQuestion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit() {
        this.props.createQuestion(this.state)
            .then(() => this.props.changeModal(false));
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}
                    className='modal-container'>
                    <label className='modal-label'>Title</label>
                    <p className='small-modal-label'>Be specific, imagine you are asking a person.</p>
                    <input type='text' 
                        value={this.state.title}
                        onChange={this.update("title")}
                        className='title-input'
                    />
                    <br />
                    <label className='modal-label'>Body</label>
                    <textarea type='text'
                        value={this.state.body}
                        onChange={this.update('body')}
                        className='modal-body'
                    />
                    <br />
                    <button type='submit'
                        className='btn-blue'>Submit</button>
                </form>
            </div>
        )
    }

}

export default AskQuestion;