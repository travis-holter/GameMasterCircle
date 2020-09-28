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
    }

    componentWillUnmount() {
        this.props.clearErrors()
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
            <img
                className="background-img"
                src={window.yellowURL}
            />
            <div className="session-form">
                <div className="errors-txt">{this.errors()}</div>
                <form className="session-form-form">
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
                    <button className="session-btn-blue" 
                        onClick={this.handleSubmit}>Sign Up
                    </button>
                </form>
            </div>
            </>
        );
    }
};

export default Signup;