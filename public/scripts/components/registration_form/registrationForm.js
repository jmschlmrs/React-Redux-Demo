import React,{Component} from 'react';

import Name from './name';
import Email from './email';
import Password from './password';
import ConfirmPassword from './confirmPassword';
import DiscoverSelect from './discoverSelect';
import Slider from './slider';

class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            discoverySource: [],
            jackedSliderValue: 3
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleSourceSelectChange = this.handleSourceSelectChange.bind(this);
        this.handleJackedSliderChange = this.handleJackedSliderChange.bind(this);
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
    handleSourceSelectChange(event) {
        let selectedOptions = [];
        for (let i=0; i<event.target.options.length ; i++) {
            if (event.target.options[i].selected) {
                selectedOptions.push(event.target.options[i].value);       
            }
        }
        this.setState({discoverySource: selectedOptions});
    }
    handleJackedSliderChange(event) {
        this.setState({jackedSliderValue: parseInt(event.target.value)});
    }
    validateForm() {
        let validForm = this.state.password === this.state.confirmPassword ? true : false;
        return validForm;
    }
    handleSubmit(event) {
        event.preventDefault();

        if (this.validateForm()) {
            console.log('valid form');
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
        else {
            alert('Passwords do not match');
        }

    }
    render() {
        return (
            <div>
                <h1 className="registration__title">Sign up</h1>
                <form onSubmit={this.handleSubmit} className="registration-form">
                    <Name inputValue={this.state.fullName} handleChange={this.handleNameChange} />
                    <Email inputValue={this.state.email} handleChange={this.handleEmailChange} />
                    <Password inputValue={this.state.password} handleChange={this.handlePasswordChange} />
                    <ConfirmPassword inputValue={this.state.confirmPassword} handleChange={this.handleConfirmPasswordChange} />
                    <DiscoverSelect inputValue={this.state.discoverySource} handleChange={this.handleSourceSelectChange} />
                    <Slider inputValue={this.state.jackedSliderValue} handleChange={this.handleJackedSliderChange} />
                    <button className="registration-form__submit-button" type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;