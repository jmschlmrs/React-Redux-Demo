import React,{Component} from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 3
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div>
                <label htmlFor="">
                    How jacked up are you right now?    
                </label>
                <div className="registration-form__slider-container">
                    <div className="registration-form__slider-input-container">
                        <input id="jackedUpInput" className="registration-form__slider-input registration-form__input" type="range" min="1" max="5" step="1" onChange={this.handleChange} value={this.state.value} />
                    </div>
                    <div className="registration-form__slider-ouput-container">
                        <output htmlFor="jackedUpInput">{this.state.value}</output>
                    </div>
                </div>
            </div>
        );
    }
}
export default Slider;