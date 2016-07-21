import React from 'react';

const ConfirmPassword = (props) => (
    <fieldset className="registration-form__input-section">
        <label htmlFor="registerConfirmPassword">
            Confirm Password <span className="registration-form__asterisk">*</span>
        </label>
        <input required minLength="6" id="registerConfirmPassword" className="registration-form__input" type="password" value={props.inputValue} onChange={props.handleChange} />
    </fieldset>
);

ConfirmPassword.propTypes = {
    inputValue: React.PropTypes.string,
    handleChange: React.PropTypes.func.isRequired
};

export default ConfirmPassword;