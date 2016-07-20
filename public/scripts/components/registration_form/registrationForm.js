import React,{Component} from 'react';
import Slider from './slider';
import Name from './name';

class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            email: '',
            password: '',
            discoverySource: '',
            jackedSliderValue: 3
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(event) {
        this.setState({fullName: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();

        fetch('/register', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(this.state)
        }).then((response) => {
            this.setState({
                fullName: '',
                email: '',
                password: '',
                discoverySource: '',
                jackedSliderValue: 3
            });
        }).catch((error) => { 
            alert('Error during registration.')
        });
    }
    render() {
        return (
            <div>
                <h1 className="registration__title">Sign up</h1>
                <form onSubmit={this.handleSubmit} className="registration-form">
                    <fieldset className="registration-form__input-section">
                        <Name inputValue={this.state.fullName} handleChange={this.handleNameChange} />
                    </fieldset>
                    <fieldset className="registration-form__input-section">
                        <label htmlFor="registerEmail">
                            Email <span className="registration-form__asterisk">*</span>
                        </label>        
                        <input id="registerEmail" className="registration-form__input" type="email" placeholder="example@domain.com" />
                    </fieldset>
                    <fieldset className="registration-form__input-section">
                        <label htmlFor="registerPassword">
                            Password <span className="registration-form__asterisk">*</span>
                        </label>       
                        <input id="registerPassword" className="registration-form__input" type="password" />
                    </fieldset>
                    <fieldset className="registration-form__input-section">
                        <label htmlFor="registerConfirmPassword">
                            Confirm Password <span className="registration-form__asterisk">*</span>
                        </label>
                        <input id="registerConfirmPassword" className="registration-form__input" type="password" />
                    </fieldset>
                    <fieldset className="registration-form__input-section">
                        <label htmlFor="">
                            Where did you hear about TUHUR?
                        </label>
                        <select multiple id="">
                            <option>Word of mouth</option>
                            <option>Search</option>
                            <option>Social</option>
                        </select>
                    </fieldset>
                    <fieldset className="registration-form__input-section">
                        <Slider />
                    </fieldset>
                    <button className="registration-form__submit-button" type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;