import React,{Component} from 'react';
import Slider from './slider';

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
    }
    render() {
        return (
            <div>
                <h1 className="registration__title">Sign up</h1>
                <form action="/register" method="post" className="registration-form">
                    <fieldset className="registration-form__input-section">
                        <label htmlFor="registerFullName">
                            Name <span className="registration-form__asterisk">*</span>
                        </label>
                        <input id="registerFullName" className="registration-form__input" type="text" placeholder="Full name" />
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