import React from 'react';

export default () => (
    <div className="home">
        <h1></h1>
        <img
            className="background-img"
            src={window.yellowURL}
        />
        <div className="welcome-msg">
            <h1>We {'<'}3 people who run games!</h1>
            <p>We help game masters connect to share resources and wisdom.</p>
            <button className="questions-btn">See what people are talking about now!</button>
        </div>
    </div>
)