import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "demo",
            password: "demo12",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        .then(() => this.props.history.push('./questions'));
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push('/questions');
    }

    render() {
        return (
        <div className="home">
            <h1></h1>
            <img
                className="background-img"
                src={window.heroURL}
            />
            <div className="welcome-msg">
                <h1>We {'<'}3 people who run games!</h1>
                <p>We help game masters connect to share resources and wisdom.</p>
                <div className="welcome-btn-div">
                    <button className="demo-btn"
                            onClick={this.handleSubmit}
                    >Log in as a demo user</button>
                    <button className="questions-btn"
                        onClick={this.handleClick}
                    >Look at questions</button>
                </div>
            </div>
        </div>
        )
}

}

export default Home;