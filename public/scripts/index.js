import React, {Component} from 'react';
import {createStore, bindActionCreators} from 'redux';
import ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux';

import userInput from './reducers';
import inputChange from './actions';
import App from './components/app';

let store = createStore(userInput);
let ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById('content')
);

function mapStateToProps(state) {
    return {
        input: state.value
    }
}
function mapDispatchToProps(dispatch) {
  return {
    handleChange: (text) => {
      dispatch(inputChange(text))
    }
  }
}