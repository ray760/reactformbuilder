import { QUESTION_TYPE } from '../constants';

const initialState = {
  questionType: '',
  question: '',
  description: null,
  required: false,
  showDescription: false
}

const questionType = (state = initialState, action) => {
  switch(action.type) {
    case QUESTION_TYPE:
      return { ...state, ...action.data };

    case 'RESET':
      return { ...state, ...initialState }  

    default:
      return state;
  }  
}

export default questionType;