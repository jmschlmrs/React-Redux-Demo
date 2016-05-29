import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Question from './components/question.jsx';
import Response from './components/response.jsx';

class App extends Component {
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

ReactDOM.render(<App/>, document.getElementById('content'));
