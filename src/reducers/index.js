const questionsReducer = (store = [{
  "id": 0,
  "question_type": "multiple_choice",
  "question": "Input question here",
  "choices": [
    "Answer One",
    "Answer Two",
    "Answer Three",
    "Answer Four"
  ]
}], action) => {
  switch(action.type) {
    default:
    return store;
  }
}

export default questionsReducer;