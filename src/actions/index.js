import { CREATE_NEW_QUESTION, QUESTION_TYPE } from '../constants';

export const question = (data) => {
  return {
    type: QUESTION_TYPE,
    data
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

export const createNewQuestion = (data) => {
  return {
    type: CREATE_NEW_QUESTION,
    data
  }
}