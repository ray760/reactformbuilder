import { CREATE_NEW_QUESTION } from '../constants';

const questionsReducer = (state = [], action) => {
  switch(action.type) {
    case CREATE_NEW_QUESTION:
      
      return state = [...state, action.data]; 

    default:
    return state;
  }
}

export default questionsReducer;