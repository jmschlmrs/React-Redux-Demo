import React,{Component} from 'react';

const Slider = (props) => (
    <fieldset className="registration-form__input-section">
        <label htmlFor="">
            How jacked up are you right now?    
        </label>
        <div className="registration-form__slider-container">
            <div className="registration-form__slider-input-container">
                <input id="jackedUpInput" className="registration-form__slider-input registration-form__input" type="range" min="1" max="5" step="1" onChange={props.handleChange} value={props.inputValue} />
            </div>
            <div className="registration-form__slider-ouput-container">
                <output htmlFor="jackedUpInput">{props.inputValue}</output>
            </div>
        </div>
    </fieldset>
);

Slider.propTypes = {
    inputValue: React.PropTypes.number,
    handleChange: React.PropTypes.func.isRequired
};

export default Slider;