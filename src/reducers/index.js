import { combineReducers } from 'redux';
import questionType from './questionTypeReducer';
import questions from './questionsReducer';

export default combineReducers({
  questionType,
  questions
})