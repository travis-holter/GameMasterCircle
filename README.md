# Game Masters Circle

Game Masters Circle is a website where game masters and dungeon masters can come together to ask eachother questions about running table top games. It is modeled after the website (http://stackoverflow.com/)

# Demo

The latest working version is hosted live on heroku. [Click here to check it out!](http://game-masters-circle.herokuapp.com/#/)

# Built With

[React-Redux](http://www.w3schools.com/whatis/whatis_react.asp) - A UI binding library that allows for responsive websites

[Ruby on Rails](http://w3points.com/ruby-on-rails-introduction/) - A backend framework, uses routes and models to communicate with the database

[Jquery-Ajax](http://www.w3schools.com/jquery/jquery_ajax_intro.asp) - A library that allows us to make asynchronous to the backend without a browser refresh

[PostgreSQL](http://www.w3schools.com/sql/) - A relational database management system


# Splah Page

![splash](https://user-images.githubusercontent.com/53350595/94932095-737e1d00-047d-11eb-897e-a57ceab2da54.png)

Uses a .svg image, it was a challenge to implement but a hero image really makes a website stand out.



```import React from 'react';

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
        </div>
        )
}

}

export default Home;```


# Fully funtional user auth with modals

![image](https://user-images.githubusercontent.com/53350595/94932521-0d45ca00-047e-11eb-8ced-18f20d6a1300.png)

Promts a user to sign in when trying to ask a question, includes a demo user account for quick access. Uses CSS stlying (especially use of flexbox) to make the page look like the model mebsite, along with jsx to keep the contents of the page organized.

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
