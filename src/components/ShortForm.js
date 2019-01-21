import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewQuestion, createNewQuestion, reset } from '../actions';

/* Short question question form */
class ShortForm extends Component {

  shortQuestion = React.createRef();
  questionDescription = React.createRef();

  handleSubmit = (evt) => {
    evt.preventDefault();

    const showDescription = this.props.question.showDescription;
    let questionTxt = this.shortQuestion.current.value;
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
    this.shortQuestion.current.value = '';
    this.questionDescription.current.value = '';
  }

  render() {

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input className="question" maxLength="70" required={ this.props.question.required } type="question" ref={this.shortQuestion} placeholder="A short question question" /> <br /><br />
          { this.props.question.showDescription ? 
              <textarea className="description" required={ this.props.question.required } rows="5" ref={this.questionDescription} cols="28" placeholder="Write your description here." />
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
      dispatch(addNewQuestion(data));
      //dispatch(createNewQuestion(data));
    },
    resetQuestion: () => {
      dispatch(reset())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortForm);