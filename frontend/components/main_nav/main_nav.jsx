import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </>
    ) : (
                <div className="nav-parent">
                    <img 
                        className="nav-logo"
                        src="/assets/stackicon.png"
                    />
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
