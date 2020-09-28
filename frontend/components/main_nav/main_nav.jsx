import React from 'react';
import { Link } from 'react-router-dom';

class MainNav extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout()
            .then(() => this.props.history.push('./'));
    }

    render() {
        const display = this.props.currentUser ? (
            <>
            <div className="nav-parent">
                <div className="nav-left">
                    <a href="/">
                        <img className="nav-logo"
                            src={window.stackiconURL}
                        />
                    </a>
                    <img className="logo"
                        src={window.logoURL}
                    />
                    <a href="http://www.linkedin.com/in/travis-holter-5376771b8">
                        <img 
                            className="linkedin-logo"
                            src={window.linkedinURL}
                        />
                    </a>
                    <a href="http://github.com/travis-holter">
                        <img
                            className="github-logo"
                            src={window.githubURL}
                        />
                    </a>
                </div>
                <div className="btn-parent">
                    <button className="btn" onClick={this.handleSubmit}>Log Out</button>
                </div>
            </div>
            </>
        ) : (
                    <div className="nav-parent">
                        <div className="nav-left">
                            <a href="/">
                                <img className="nav-logo"
                                    src={window.stackiconURL}
                                />
                            </a>
                            <a href="/">
                                <img className="logo"
                                    src={window.logoURL}
                                />
                            </a>
                            <a href="http://www.linkedin.com/in/travis-holter-5376771b8">
                                <img
                                    className="linkedin-logo"
                                    src={window.linkedinURL}
                                />
                            </a>
                            <a href="http://github.com/travis-holter">
                                <img
                                    className="github-logo"
                                    src={window.githubURL}
                                />
                            </a>
                        </div>
                        <div className="btn-parent">
                            <Link className="btn" to="/login">Log In</Link>
                            <Link className="btn-blue" to="/signup">Sign Up</Link>
                        </div>
                    </div>
            );
        
        return (
            <header className="nav-bar">
                <div>
                    {display}
                </div>
            </header>
        );
    }

}

export default MainNav;