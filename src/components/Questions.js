import React, { Component } from 'react';

/* Multiple choice question form */
export class MultiForm extends Component{
  render(){
    return (
      <div>
        <input required type="text" ref={this.editTitle} placeholder="A multiple choice question" /> <br /><br />
        <textarea required rows="5" ref={this.editMessage} cols="28" placeholder="Enter Post" />
      </div>
    )
  }
}

/* Short text question form */
export class ShortForm extends Component {
  render() {
    return (
      <div>
        <input required type="text" ref={this.editTitle} placeholder="A short text question" /> <br /><br />
        <textarea required rows="5" ref={this.editMessage} cols="28" placeholder="Enter Post" />
      </div>
    )
  }
}

/* Long text question form */
export class LongForm extends Component {
  render() {
    return (
      <div>
        <input required type="text" ref={this.editTitle} placeholder="A long text question" /> <br /><br />
        <textarea required rows="5" ref={this.editMessage} placeholder="Write your description here" />
      </div>
    )
  }
}