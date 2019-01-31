import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionBtn from './QuestionBtn';
import Switch from './Switch';

class Selection extends Component {

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