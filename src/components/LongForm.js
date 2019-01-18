import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewQuestion, reset } from '../actions';

/* Long text question form */
class LongForm extends Component {
  longQuestion = React.createRef();
  questionDescription = React.createRef();

  handleSubmit = (evt) => {
    evt.preventDefault();

    const showDescription = this.props.question.showDescription;
    let questionTxt = this.longQuestion.current.value;
    let descriptionTxt = null;

    if(showDescription) {
      descriptionTxt = this.questionDescription.current.value;
    }

    const data = {
      question: questionTxt,
      description: descriptionTxt 
    }
    
    this.props.addQuestion({...this.props.question, ...data});

    this.clearCurrent();
  }

  clearCurrent = () => {
    this.props.resetQuestion();
    this.longQuestion.current.value = '';
    this.questionDescription.current.value = '';
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input required={ this.props.question.required } onChange={this.handleChange} type="text" ref={this.longQuestion} placeholder="A long text question" /> <br /><br />
          { this.props.question.showDescription ? 
              <textarea required={ this.props.question.required } rows="5" ref={this.questionDescription} cols="28" placeholder="Write your description here." />
            : null
          }
          <input type="submit" value="Post"/>
        </form>
        
        </React.Fragment>
    )
  }
}

const mapStateToProps = ({ question, questions}) => {
  return { question, questions }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    addQuestion: (data) => {
      dispatch(createNewQuestion(data));
    },
    resetQuestion: () => {
      dispatch(reset())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LongForm);