import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import questionsReducer from './reducers/';
import * as serviceWorker from './serviceWorker';

const store = createStore(questionsReducer);

ReactDOM.render(
  <Provider store={store}>
   <App>
   { console.log(store.getState()) }  
   </App> 
   {/* <App /> */}
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
