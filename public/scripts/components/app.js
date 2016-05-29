import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Question from './question.jsx';
import Response from './response.jsx';

export default class App extends Component {
  render() {
    const styles = {
        backgroundColor: 'purple'
    }
    return (
        <div style={styles}>
            <Question />
            <Response />
        </div>
    )
  }
}
