import { createStore } from 'redux';
import reducers from '../reducers';

/* 
  Store data model for reference

  {
    questions: [
      {
        id: number,
        : String,
        question: String,
        required: Boolean,
        description: String
      }
    ],
    // Set in questionTypeReducer.js //
    question: {
      questionType: String,
      required: Boolean,
      description: Boolean
    }
  }

*/

const store = createStore(reducers);

store.subscribe(() => {
  //console.clear();
  console.log('STATE CHANGED', store.getState())
})

export default store;