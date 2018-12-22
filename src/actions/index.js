import { CREATE_NEW_QUESTION, QUESTION_TYPE } from '../constants';

export const questionType = (questionType) => {
  return {
    type: QUESTION_TYPE,
    questionType
  }
}

export const createNewQuestion = (data) => {
  return {
    type: CREATE_NEW_QUESTION,
    data
  }
}