import React from 'react';

const QuestionItem = ({question}) => {
    return (
        <li className="question-item">
            <p>{question.title}</p>
            <p>{question.body}</p>
        </li>
    )
}

export default QuestionItem;