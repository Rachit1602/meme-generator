import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';

import { fetchMemes } from './actions';

const store = createStore(rootReducer,applyMiddleware(thunk));
store.subscribe(()=> console.log(store.getState()));
store.dispatch(fetchMemes());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

