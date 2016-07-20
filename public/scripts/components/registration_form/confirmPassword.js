import React from 'react';

const ConfirmPassword = (props) => (
    <div>
        <label htmlFor="registerConfirmPassword">
            Confirm Password <span className="registration-form__asterisk">*</span>
        </label>
        <input id="registerConfirmPassword" className="registration-form__input" type="password" value={props.inputValue} onChange={props.handleChange} />
    </div>
);

ConfirmPassword.propTypes = {
    inputValue: React.PropTypes.string,
    handleChange: React.PropTypes.func.isRequired
};

export default ConfirmPassword;