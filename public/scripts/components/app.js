import React,{Component} from 'react';

class App extends Component {
    constructor(props) {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.setColor = this.setColor.bind(this);
    }
    handleChange(event) {
        this.props.handleChange(event.target.value);
    }
    setColor(userInput) {
        let mood = '';
        let positiveInput = ['fantastic','good','great','happy'];
        let negativeInput = ['bad','depressed','sad','not good','not great']

        if (positiveInput.includes(userInput)) {
            mood = 'positive';
        }
        else if (negativeInput.includes(userInput)) {
            mood = 'negative';
        }
        return ' app-container' + (0 < mood.length ? '--' : '') + mood;
    }
    render() {
        return (
            <div className={'app-container' + this.setColor(this.props.input)}>
                <h2>How are you?</h2>
                <input className="app-input" value={this.props.input} onChange={this.handleChange}/>
                <p className={this.props.input.length < 1 ? 'hidden' : ''}>I am {this.props.input}.</p>  
            </div>
        );
    }
}

export default App;