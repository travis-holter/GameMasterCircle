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
            .then();
    }

    render() {
        return(
            <div>
                Ask Questions!
            </div>
        )
    }

}

export default AskQuestion;