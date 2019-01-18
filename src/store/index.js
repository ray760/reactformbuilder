import { createStore } from 'redux';
import reducers from '../reducers';

/* 
  Store data model for reference

  {
    questions: [
      {
        id: number,
        questionType: String,
        required: Boolean,
        description: String
        question: String,
      }
    ],
    // Set in questionTypeReducer.js //
    question: {
      questionType: String,
      required: Boolean,
      showDescription: Boolean,
      question: String,
      description: String
    }
  }

*/

const store = createStore(reducers);

store.subscribe(() => {
  //console.clear();
  console.log('STATE CHANGED', store.getState())
})

export default store;