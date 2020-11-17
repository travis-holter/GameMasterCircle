import React from 'react';
import { FiDatabase } from 'react-icons/fi';
import { DiReact } from 'react-icons/di';
import { AiOutlineMessage } from 'react-icons/ai';

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
                <h1 className="home-txt-big">We {'<'}3 people who run games!</h1>
                <p className="home-txt-small">We help game masters connect to share resources and wisdom.</p>
                <div className="welcome-btn-div">
                    <button className="demo-btn"
                            onClick={this.handleSubmit}
                    >Log in as a demo user</button>
                    <button className="questions-btn"
                        onClick={this.handleClick}
                    >Look at questions</button>
                </div>
            </div>
            <div className="splash-page-desc">
                    <div className="splash-page-mid">
                        <div className="mid-top">
                            <h2 className="mid-title">For Table-Top players and Game Masters, built by Travis Holter</h2>
                            <div className="orange-bar"></div>
                            <div className="mid-text-container">
                                <p className="mid-text">
                                    An application modeled after StackOverflow, Game Master Circle
                                    provides a platform for users to ask and answer eachothers
                                    questions about running games and is a gateway to a fun and 
                                    positive community.
                                </p>
                        </div>
                    </div>
                </div>
                <div className="splash-bottom">
                    <div className="splash-bottom-1">
                        <DiReact className="symbol" />
                        <p className="symbol-text">
                            This App's frontend uses React, Redux,
                            JavaScript and HTML/CSS
                            </p>
                    </div>
                    <div className="splash-bottom-2">
                        <FiDatabase className="symbol" />
                        <p className="symbol-text">
                            This App's backend uses Ruby on Rails, jBuilder, AJAX, JSON, and PostgreSQL.
                        </p>
                    </div>
                    <div className="splash-bottom-3">
                        <AiOutlineMessage className="symbol" />
                        <p className="symbol-text">
                            Users can create, update, edit and delte their own questions 
                            and answers, as well as answer other users questions. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        )
}

}

export default Home;