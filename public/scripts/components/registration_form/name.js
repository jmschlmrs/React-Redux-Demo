import React from 'react';

const Name = (props) => (
    <fieldset className="registration-form__input-section">
       <label htmlFor="registerFullName">
            Name <span className="registration-form__asterisk">*</span>
        </label>
        <input required id="registerFullName" className="registration-form__input" type="text" value={props.inputValue} onChange={props.handleChange} placeholder="Full name" />                   
    </fieldset>
);

Name.propTypes = {
    inputValue: React.PropTypes.string,
    handleChange: React.PropTypes.func.isRequired
};

export default Name;