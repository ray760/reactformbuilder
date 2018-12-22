import React from 'react';
import { connect } from 'react-redux';
import { questionType } from '../actions';

const QuestionBtn = (props) => {

  const handleClick = (e) => {
    props.dispatch(questionType(props.questionType));
  }

  return (
    <div className="item">
      <button className={`ui basic button ${props.questionType}`} onClick={handleClick}>{props.question}</button>
    </div>
  )
}

export default connect()(QuestionBtn);