import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CREATE_NEW_QUESTION } from '../constants';
import { createNewQuestion } from '../actions';
import '../css/app.css';

class App extends Component {

  handleClick = (e) => {

    this.props.createNewQuestion({
      type: CREATE_NEW_QUESTION,
      data: {
        "id": Math.floor(Math.random() * 9999),
        "question_type": "short_text",
        "question": "Input question here"
      }
    })
  }

  componentDidMount = (data) => {

  }

  render() {
    return (
      <div className="ui container App">
        <h1 className="ui header dividing">Form Assessment Builder</h1>
        <button onClick={this.handleClick}>CLICK ME</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return { questions: state };
}

export default connect(mapStateToProps,
  { createNewQuestion }
)(App);
