import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Long text question form */
class LongForm extends Component {

  state = {
    text: '',
    descriptionText: ''
  }

  handleChange = (e) => {
    let txtValue = e.target.value;
    this.setState({
      text: txtValue
    })
  }

  render() {
    return (
      <div>
        <b>{this.state.text}</b>
        <input required={ this.props.question.required } onChange={this.handleChange} type="text" ref={this.longQuestion} placeholder="A long text question" value={this.state.text} /> <br /><br />
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

export default connect(mapStateToProps)(LongForm);