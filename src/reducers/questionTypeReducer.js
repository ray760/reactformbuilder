import { CREATE_NEW_QUESTION } from '../constants';

const initialState = {
  questionType: '',
  question: '',
  description: null,
  required: false,
  showDescription: false
}

const createNewQuestionType = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_NEW_QUESTION:
      return { ...state, ...action.data };

    case 'RESET':
      return { ...state, ...initialState }  

    default:
      return state;
  }  
}

export default createNewQuestionType;