const questionType = (state = '', action) => {
  switch(action.type) {
    case 'QUESTION_TYPE':
      return state = action.questionType;

    default:
      return state;
  }  
}

export default questionType;