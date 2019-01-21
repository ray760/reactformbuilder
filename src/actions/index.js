import questions from '../apis/questions'
import { CREATE_NEW_QUESTION } from '../constants';

export const createNewQuestion = (data) => {
  return {
    type: CREATE_NEW_QUESTION,
    data
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

export const addNewQuestion = (question) => {

  return async (dispatch) => {
    const response = await questions.post('/questions', question);

    //dispatch({type: CREATE_NEW_QUESTION , data: response.data});
  }
}