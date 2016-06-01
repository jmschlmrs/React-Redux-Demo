import React, {Component} from 'react';

export default class Response extends Component {
    constructor(props) {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ''
        };
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.handleChange}/>
                <br />
                <div>I am {this.state.value}</div>   
            </div>
        )
    }
}
