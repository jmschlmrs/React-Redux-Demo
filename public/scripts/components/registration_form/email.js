import React from 'react';

const Email = (props) => (
    <div>
        <label htmlFor="registerEmail">
            Email <span className="registration-form__asterisk">*</span>
        </label>        
        <input id="registerEmail" className="registration-form__input" type="email" value={props.inputValue} onChange={props.handleChange} placeholder="example@domain.com" />
    </div>
);

Email.propTypes = {
    inputValue: React.PropTypes.string,
    handleChange: React.PropTypes.func.isRequired
};

export default Email;