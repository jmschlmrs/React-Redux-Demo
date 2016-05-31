import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userInput from './reducers/index.js';
import App from './components/app.js';

let store = createStore(userInput);

console.log(store.getState());
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch({type: 'USER_INPUT', text: 'test text'});

render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('content')
);