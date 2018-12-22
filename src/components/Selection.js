import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionBtn from './QuestionBtn';
import { CREATE_NEW_QUESTION } from '../constants';
import { createNewQuestion } from '../actions';

class Selection extends Component {

  handleClick = (e) => {

    this.props.createNewQuestion({
      type: CREATE_NEW_QUESTION,
      data: {
        "id": Math.floor(Math.random() * 9999),
        "": "short_text",
        "question": "Input question here"
      }
    })

    console.log('Current State', this.props.getState());
  }

  render() {

    return (
      <div className="ui list">
        <QuestionBtn questionType="multiple_choice" question="Multiple Choice" />
        <QuestionBtn questionType="short_text" question="Short Text" />
        <QuestionBtn questionType="long_text" question="Long Text" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.clear();
  //console.log(state);

  return { questions: state };
}

export default connect(mapStateToProps,
  {createNewQuestion})(Selection);