import React from 'react';
import {
    TiArrowSortedDown,
    TiArrowSortedUp,
} from 'react-icons/ti';
import ReactGA from 'react-ga'

class QuestionVotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionId: this.props.question.id,
            votes: this.props.question.upvotes - this.props.question.downvotes,
            totalVotes: this.props.question.upvotes + this.props.question.downvotes
        }
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
        this.indicateVote = this.indicateVote.bind(this);
    }

    componentDidMount() {
        this.indicateVote();
    }

    handleUpvote(e) {
        e.preventDefault();
        ReactGA.event({
            category: "Upvote Question",
            action: "Click upvote on a question",
        });
        this.props.createUpvote(this.state.questionId, 0)
            .then(() => {
                this.indicateVote();
                return this.setState({
                    votes: this.props.question.upvotes - this.props.question.downvotes,
                    totalVotes: this.props.question.upvotes + this.props.question.downvotes
                })
            });
    }

    handleDownvote(e) {
        e.preventDefault();
        ReactGA.event({
            category: "Downvote Question",
            action: "Click downvote on a question",
        });
        this.props.createDownvote(this.state.questionId, 0)
            .then(() => {
                this.indicateVote();
                return this.setState({
                    votes: this.props.question.upvotes - this.props.question.downvotes,
                    totalVotes: this.props.question.upvotes + this.props.question.downvotes
                })
            });
    }

    votingDisplay() {
        return (
            <div className="q-vote">
                <TiArrowSortedUp
                    id="up-q-vote"
                    onClick={this.handleUpvote}
                />
                <p className="votes">{this.state.votes}</p>
                <TiArrowSortedDown
                    id="down-q-vote"
                    onClick={this.handleDownvote}
                />
                <p className="all-votes">Votes: {this.state.totalVotes}</p>
            </div>
        );
    }

    indicateVote() {
        if (this.props.currentUser) {
            let currentUserId = parseInt(this.props.currentUser.id);
            let userUpvoted = this.props.question.upvotes_user_id.includes(currentUserId);
            let userDownvoted = this.props.question.downvotes_user_id.includes(currentUserId);
            let upvoteArrow = document.getElementById("up-q-vote");
            let downvoteArrow = document.getElementById("down-q-vote");

            if (userUpvoted) {
                upvoteArrow.style.color = "orange";
                downvoteArrow.style.color = "lightgray";
            } else if (userDownvoted) {
                downvoteArrow.style.color = "orange";
                upvoteArrow.style.color = "lightgray";
            }
        }
    }

    render() {
        return (
            <div>
                {this.votingDisplay()}
            </div>
        );
    }
}

export default QuestionVotes;