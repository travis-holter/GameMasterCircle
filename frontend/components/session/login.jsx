import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    handleLogin(e) {
        e.preventDefault();
        this.props.login({
            username: "demo",
            password: "demo12",
        })
            .then(() => this.props.history.push('./questions'));
    };

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
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
                    <label className="session-text">Password
                        <input className="session-field"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <br />
                    <div className="login-btns">
                        <button className="session-btn" 
                            onClick={this.handleSubmit}>Log In
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

export default Signin;