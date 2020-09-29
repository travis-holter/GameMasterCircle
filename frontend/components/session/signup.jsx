import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    handleLogin(e) {
        e.preventDefault();
        this.props.login({
            username: "demo",
            password: "demo12",
        })
        .then(() => this.props.history.push('./questions'));
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
        .then(() => this.props.history.push('./questions'));
    }

    errors() {
        return (
            <div>
                {this.props.errors.map((error, i) => (
                    <p className="error-li" 
                        key={i}>
                        {error}
                    </p>))}
            </div>
        )
    }

    render() {
        return (
            <>
            <div className="session-form">
                <div className="side-info">
                    <p>Join the Game Master Circle community!</p>
                    <div className="side-info-item">
                        <img className="side-info-img"
                            src={window.chatURL}></img>
                        <p>Ask a question</p>
                    </div>
                    <div className="side-info-item">
                        <img className="side-info-img"
                            src={window.voteURL}></img>
                        <p>Vote and answer questions</p>
                    </div>
                    <div className="side-info-item">
                        <img className="side-info-img"
                            src={window.seedlingURL}></img>
                        <p>Grow your skills</p>
                    </div>
                </div>
                <form className="session-form-form">
                    <div className="errors-txt">{this.errors()}</div>
                    <label className="session-text">Username
                        <input className="session-field"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <br />
                    <label className="session-text">Email
                        <input className="session-field"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <br />
                    <label className="session-text">Password
                        <input className="session-field"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <p className="password-txt">Passwords must contain at least six characters.</p>
                    <br />
                    <div className="signup-btns">
                        <button className="session-btn-blue" 
                            onClick={this.handleSubmit}>Sign Up
                        </button>
                        <button className="btn-green"
                        onClick={this.handleLogin}>
                            Log In as Demo User
                        </button>
                    </div>
                </form>
            </div>
            </>
        );
    }
};

export default Signup;