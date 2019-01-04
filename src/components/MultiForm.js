import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Multiple choice question form */
class MultiForm extends Component{
  render(){
    return (
      <div>
        <input required type="text" ref={this.multiQuestion} placeholder="A multiple choice question" /> <br /><br />
        { this.props.question.description ? 
            <textarea required={ this.props.question.required } rows="5" ref={this.editMessage} cols="28" placeholder="Write your description here." />
           : null
        }
      </div>
    )
  }
}

const mapStateToProps = ({ question }) => {
  return { question }
}

export default connect(mapStateToProps)(MultiForm);