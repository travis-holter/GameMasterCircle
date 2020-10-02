import React from 'react';
import { formatDate, timeAgo } from '../../utils/date_util';

const QuestionItem = ({ question}) => {
    return (
        <li className="question-item">
            <div className='stats-div'>
                <div className='question-item-div-numbers'>
                    <p className='number-gray-txt'>0</p>
                    <p className='little-gray-txt'>votes</p>
                </div>
                <div className='question-item-div-numbers'>
                    <p className='number-gray-txt'>0</p>
                    <p className='little-gray-txt'>answers</p>
                </div>
            </div>
            <div className='question-item-div'>
                <p className='p-right'>{question.title}</p>
                <p className='p-right'>{question.body}</p>
                <p className='gray-txt'>Created {timeAgo(question.created_at)} ago</p>
            </div>
        </li>
    )
}

export default QuestionItem;