import React from 'react';
import { connect } from 'react-redux';
import { createNewQuestion } from '../actions';

const Switch = (props) => {
  const handleSwitch = (e) => {
    let checked = e.target.checked;
    let keyName = props.class;
    props.isRequired(checked, keyName);  
  }

  return (
    <div className="item">
      <label className="switch">
        <b style={{display: 'block'}}>{ props.class }</b>
          <input onChange={handleSwitch} type="checkbox" className={props.class} readOnly="" tabIndex="0"/>
          <span className="slider round"></span>
      </label>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { question: state };
}

const mapDispatchToProps = (dispatch) => {
  
  return { 
    dispatch,
    isRequired: (checked, key) => {
      dispatch(createNewQuestion({ [key]: checked }))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Switch);