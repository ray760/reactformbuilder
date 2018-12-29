import React from 'react';
import { connect } from 'react-redux';
import { question } from '../actions';

const QuestionBtn = (props) => {

  const handleClick = (e) => {
    props.dispatch(question({questionType: props.questionType}));
  }

  return (
    <div className="item">
      <button className={`ui basic button ${props.question}`} onClick={handleClick}>{props.question}</button>
    </div>
  )
}

export default connect()(QuestionBtn);