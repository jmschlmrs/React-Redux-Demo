import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userInput from './reducers/index';
import App from './components/app';

let store = createStore(userInput);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('content')
);