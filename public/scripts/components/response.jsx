import React, {Component} from 'react';

export default class Response extends Component {
    constructor(props) {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            color: '',
            value: '',
        };
    }
    handleChange(event) {
        this.setState({value: event.target.value});

        if (event.target.value.toLowerCase() === 'good') {
            this.setState({color: 'purple'});
        }
        console.log(this.state.value, this.state.color);
    }
    render() {
        return (
            <input value={this.state.value} onChange={this.handleChange}/>
        )
    }
}
