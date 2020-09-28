import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <>
        <div className="nav-parent">
            <div className="nav-left">
                <a href="/">
                    <img className="nav-logo"
                        src={window.stackiconURL}
                    />
                </a>
                    <a href="http://www.linkedin.com/in/travis-holter-5376771b8">
                    <img 
                        className="linkedin-logo"
                        src={window.linkedinURL}
                    />
                </a>
            </div>
            <div className="btn-parent">
                <button className="btn" onClick={logout}>Log Out</button>
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
                        <a href="http://www.linkedin.com/in/travis-holter-5376771b8">
                            <img
                                className="linkedin-logo"
                                src={window.linkedinURL}
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
};
