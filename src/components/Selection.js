import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionBtn from './QuestionBtn';
import Switch from './Switch';
import { CREATE_NEW_QUESTION } from '../constants';

class Selection extends Component {

  handleClick = (e) => {

    this.props.createNewQuestion({
      type: CREATE_NEW_QUESTION,
      data: {
        "id": Math.floor(Math.random() * 9999),
        "questionType": "short_text",
        "question": "Input question here"
      }
    })

    console.log('Current State', this.props.getState());
  }

  render() {

    return (
      <React.Fragment>
        <div className="ui list">
          <QuestionBtn questionType="multiple_choice" question="Multiple Choice" />
          <QuestionBtn questionType="short_text" question="Short Text" />
          <QuestionBtn questionType="long_text" question="Long Text" />
          <Switch class="required" />
          <Switch class="showDescription" />
        </div>
      </React.Fragment>
    )
  }
}

/* const mapStateToProps = (state) => {
  return { question: state };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    dispatch
  }
} */

export default connect()(Selection);