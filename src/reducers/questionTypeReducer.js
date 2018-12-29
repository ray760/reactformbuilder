const initialState = {
  questionType: '',
  required: false,
  description: false
}

const questionType = (state = initialState, action) => {
  //console.log('REDUCER: ', {...action.data});
  switch(action.type) {
    case 'QUESTION_TYPE':
      return { ...state, ...action.data };

    default:
      return state;
  }  
}

export default questionType;