import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore ,applyMiddleware} from 'redux';
import reducer from './store/reducer';

const logAction = store =>{
  return next =>{
    return action =>{
      const result = next(action);
      console.log(
        `middleware came inbetween ${JSON.stringify(store.getState())}`
      );
      return result;
    }
  }
}


const store = createStore(reducer,applyMiddleware(logAction));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
