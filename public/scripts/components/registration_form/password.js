import React from 'react';

const Password = (props) => (
    <fieldset className="registration-form__input-section">
        <label htmlFor="registerPassword">
            Password <span className="registration-form__asterisk">*</span>
        </label>       
        <input required minLength="6" id="registerPassword" className="registration-form__input" type="password" value={props.inputValue} onChange={props.handleChange} />
    </fieldset>
);

Password.propTypes = {
    inputValue: React.PropTypes.string,
    handleChange: React.PropTypes.func.isRequired
};

export default Password;