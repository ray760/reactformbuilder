import { CREATE_NEW_QUESTION } from '../constants';

export const createNewQuestion = (data) => {
  return {
    type: CREATE_NEW_QUESTION,
    data
  }
}