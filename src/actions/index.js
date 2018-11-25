import { CREATE_NEW_QUESTION } from '../constants';

const createNewQuestion = (data) => {
  return {
    type: CREATE_NEW_QUESTION,
    data
  }
}