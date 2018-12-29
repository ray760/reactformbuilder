import { CREATE_NEW_QUESTION, QUESTION_TYPE } from '../constants';

export const question = (data) => {
  //console.log('ACTION: ',data)
  return {
    type: QUESTION_TYPE,
    data
  }
}

export const createNewQuestion = (data) => {
  return {
    type: CREATE_NEW_QUESTION,
    data
  }
}