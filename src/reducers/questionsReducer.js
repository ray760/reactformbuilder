import _ from 'lodash';

import { 
  DELETE_QUESTION,
  EDIT_QUESTION,
  FETCH_QUESTION, 
  FETCH_QUESTIONS,
  POST_NEW_QUESTION
} from '../constants';

const questionsReducer = (state = [], action) => {
  switch(action.type) {
    case POST_NEW_QUESTION:
      return { ...state, [action.data.id]: action.data }; 

    case DELETE_QUESTION:
      return _.omit(state, action.payload)

    case EDIT_QUESTION:
      return { ...state, [action.data.id]: action.data };      

    case FETCH_QUESTIONS:
      return [...state, ...action.data];

    case FETCH_QUESTION:
      return { ...state, [action.data.id]: action.data };

    default:
      return state;
  }
}

export default questionsReducer;