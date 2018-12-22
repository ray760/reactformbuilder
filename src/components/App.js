import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CREATE_NEW_QUESTION } from '../constants';
import { createNewQuestion } from '../actions';
import '../css/app.scss';

import Selection from './Selection';
import FormHolder from './FormHolder';

class App extends Component {

  handleClick = (e) => {

    this.props.createNewQuestion({
      type: CREATE_NEW_QUESTION,
      data: {
        "id": Math.floor(Math.random() * 9999),
        "": "short_text",
        "question": "Input question here",
        required: false
      }
    })


  }

  componentDidMount = (data) => {

  }

  render() {
    return (
      <div className="ui container App">
        <h1 className="ui header dividing">Form Assessment Builder</h1>
        <div className="ui grid">
          <div className="three wide column">
            <Selection />
            <button onClick={this.handleClick}>CLICK ME</button>
          </div>

          <div className="thirteen wide column">
            <FormHolder />
          </div>          
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  

  return { question: state.currentQuestionType };
}

export default connect(mapStateToProps,
  { createNewQuestion }
)(App);
