import React,{Component} from 'react';

class App extends Component {
    constructor(props) {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.handleChange(event.target.value);
    }
    render() {
        return (
            <div>
                <h2>How are you?</h2>
                <input value={this.props.input} onChange={this.handleChange}/>
                <p>I am {this.props.input}.</p>  
            </div>
        );
    }
}

export default App;