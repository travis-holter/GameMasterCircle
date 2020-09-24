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
        this.props.createNewUser(this.state);
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
                src="/assets/yellow.png"
            />
            <div className="session-form">
                <div className="errors-txt">{this.errors()}</div>
                <form className="session-form-form">
                    <label>Username
                        <input type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <br />
                    <label>Email
                        <input type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
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
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
            </>
        );
    }
};

export default Signup;