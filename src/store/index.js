import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  //console.clear();
  console.log('STATE CHANGED', store.getState())
})

export default store;