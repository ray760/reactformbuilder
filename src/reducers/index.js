import { combineReducers } from 'redux';
import question from './questionTypeReducer';
import questions from './questionsReducer';

export default combineReducers({
  question,
  questions
})