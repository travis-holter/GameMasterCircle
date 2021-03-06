import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, timeAgo } from '../../utils/date_util';

const QuestionItem = ({ question}) => {
    return (
        <li className="question-item">
            <div className='stats-div'>
                <div className='question-item-div-numbers'>
                    <p className='number-gray-txt'>{question.upvotes - question.downvotes}</p>
                    <p className='little-gray-txt'>votes</p>
                </div>
                <div className='question-item-div-numbers'>
                    <p className='number-gray-txt'>{question.answer_count}</p>
                    <p className='little-gray-txt'>answers</p>
                </div>
            </div>
            <div className='question-item-div'>
                <Link className='p-right' to={`/questions/${question.id}`}>{question.title}</Link>
                <p className='p-right'>{question.body}</p>
                <p className='gray-txt'>Created {timeAgo(question.created_at)} ago</p>
            </div>
        </li>
    )
}

export default QuestionItem;