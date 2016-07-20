import React from 'react';

const Password = (props) => (
    <div>
        <label htmlFor="registerPassword">
            Password <span className="registration-form__asterisk">*</span>
        </label>       
        <input id="registerPassword" className="registration-form__input" type="password" value={props.inputValue} onChange={props.handleChange} />
    </div>
);

Password.propTypes = {
    inputValue: React.PropTypes.string,
    handleChange: React.PropTypes.func.isRequired
};

export default Password;