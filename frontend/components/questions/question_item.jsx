import React from 'react';

const QuestionItem = ({question}) => {
    return (
        <li className="question-item">
            <div className='question-item-div'>
                <p className='number-gray-txt'>0</p>
                <p className='little-gray-txt'>votes</p>
            </div>
            <div className='question-item-div'>
                <p className='number-gray-txt'>0</p>
                <p className='little-gray-txt'>answers</p>
            </div>
            <div className='question-item-div'>
                <p>{question.title}</p>
                <p className='gray-txt'>created a bit ago by some guy</p>
            </div>
        </li>
    )
}

export default QuestionItem;