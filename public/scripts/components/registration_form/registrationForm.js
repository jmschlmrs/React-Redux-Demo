import React,{Component} from 'react';
import Slider from './slider';
import Name from './name';
import Email from './email';
import Password from './password';
import ConfirmPassword from './confirmPassword';

class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            discoverySource: '',
            jackedSliderValue: 3
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(event) {
        this.setState({fullName: event.target.value});
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    handleConfirmPasswordChange(event) {
        this.setState({confirmPassword: event.target.value});
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
                confirmPassword: '',
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
                        <Email inputValue={this.state.email} handleChange={this.handleEmailChange} />
                    </fieldset>
                    <fieldset className="registration-form__input-section">
                        <Password inputValue={this.state.password} handleChange={this.handlePasswordChange} />
                    </fieldset>
                    <fieldset className="registration-form__input-section">
                        <ConfirmPassword inputValue={this.state.confirmPassword} handleChange={this.handleConfirmPasswordChange} />
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