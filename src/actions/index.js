import questions from '../apis/questions'
 import { 
  CREATE_NEW_QUESTION,
  DELETE_QUESTION,
  EDIT_QUESTION,
  FETCH_QUESTION,
  FETCH_QUESTIONS,
  POST_NEW_QUESTION
 } from '../constants';

/* This action is used to store state of current
  question being created.
*/ 
export const createNewQuestion = (data) => {
  return {
    type: CREATE_NEW_QUESTION,
    data
  }
}

/* This action resets current question to default state */
export const reset = () => {
  return {
    type: 'RESET'
  }
}

/* This action is used to post currently created question
  to json-server.
*/
export const addNewQuestion = (question) => {
  return async (dispatch) => {
    const posted = await (questions.post('/questions', question));
    //dispatch({type: POST_NEW_QUESTION , data: response.data});
  }
}

export const deleteQuestion = (id) => {
  return async (dispatch) => {
    await questions.delete(`/questions/${id}`);

    dispatch({type: DELETE_QUESTION, data: id});
  }
}

export const editQuestion = (id, updateData) => {
  return async (dispatch) => {
    const response = await questions.put(`/questions/${id}`, updateData);

    dispatch({ type: EDIT_QUESTION, data: response.data});
  }
}
export const fetchQuestion = (id) => {
  return async (dispatch) => {
    const response = await questions.get(`/questions/:${id}`);

    dispatch({ type: FETCH_QUESTION, data: response.data });   
  }
}

export const fetchQuestions = () => {
  return async (dispatch) => {
    const response = await questions.get('/questions');
    dispatch({ type: FETCH_QUESTIONS, data: response.data });
  }
}
