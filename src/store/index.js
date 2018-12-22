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
    questionType: String
    }
  }

*/

const store = createStore(reducers);

store.subscribe(() => {
  //console.clear();
  console.log('STATE CHANGED', store.getState())
})

export default store;