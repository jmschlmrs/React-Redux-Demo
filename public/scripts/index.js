import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
//import howAreYou from './reducers'
import App from './components/app.js'

//let store = createStore(howAreYou)

render(
    <App />,
  document.getElementById('content')
)