import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MultiForm, ShortForm, LongForm } from './Questions';

class FormHolder extends Component {
  
  returnQuestion = (q) => {
    switch(q) {
      case 'multiple_choice':
        return <MultiForm />

      case 'short_text':
        return <ShortForm />
      
      case 'long_text':
        return <LongForm />

      default:
        return <b>SELECT QUESTION TYPE</b>
    }
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <h6>Title</h6>
            <p>Lorem ipsum text stuff.</p>
          </li>
        </ul>
        <form onSubmit={this.handleSubmit}>         
          {this.returnQuestion(this.props.question.questionType)}
        </form>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { question: state.question }
}

export default connect(mapStateToProps)(FormHolder);