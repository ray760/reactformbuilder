import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions';
import MultiForm from './MultiForm';
import ShortForm from './ShortForm';
import LongForm from './LongForm';

class FormHolder extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
  }

  returnQuestion = (q) => {
    switch(q) {
      case 'multiple_choice':
        return <MultiForm />

      case 'short_text':
        return <ShortForm />
      
      case 'long_text':
        return <LongForm />

      default:
        return <b>CHOOSE QUESTION TYPE TO CREATE.</b>
    }
  }

  componentDidUpdate = () => {
    console.log('COMPONENT UPDATE')
  }

  componentDidMount = () => {
    console.log('COMPONENT MOUNTED')
    this.props.dispatch(fetchQuestions())

  }

  render() {
    return (
      <React.Fragment>
        {/* Pulls in question type component */}
        {this.returnQuestion(this.props.question.questionType)}
        
        {/* Builds list of created questions */}
        
        <ul className="ui celled">

          { this.props.questions.map( item => 
            <li className="item" key={item.id}>
              <h6>{item.question}</h6>
              <p>{item.description}</p>              
            </li>
          )}

        </ul>
         
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    question: state.question,
    questions: state.questions
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormHolder);