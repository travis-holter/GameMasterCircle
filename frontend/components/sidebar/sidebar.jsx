import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className='sidebar'>
                <Link to="/">Home</Link>
                <div className='sidebar-container'>
                    <a href="http://www.linkedin.com/in/travis-holter-5376771b8">
                        <img
                            className="linkedin-logo"
                            src={window.linkedinURL}
                        />
                    </a>
                    <a href="http://www.linkedin.com/in/travis-holter-5376771b8">
                        Travis's LinkedIn
                    </a>
                </div>
                <div className='sidebar-container'>
                    <a href="http://github.com/travis-holter">
                        <img
                            className="github-logo"
                            src={window.githubURL}
                        />
                    </a>
                    <a href="http://github.com/travis-holter">
                        Travis's GitHub
                    </a>
                </div>
            </div>
        )
    }
}

export default SideBar;