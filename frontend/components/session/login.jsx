import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    errors() {
        return (
            <div>
                {
                    this.props.errors.map((error, idx) => (
                        <p className="error-li" key={idx}>
                            {error}
                        </p>
                    ))
                }
            </div>
        )
    }

    render() {
        return (
            <div className="session-form">
                {this.errors()}
                <form className="session-form-form">
                    <label>Username
                        <input type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <br />
                    <label>Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <br />
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
            </div>
        );
    }
};

export default Signin;