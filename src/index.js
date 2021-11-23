import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import App from './components/App';


const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


