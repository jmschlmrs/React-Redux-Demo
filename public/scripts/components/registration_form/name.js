import React from 'react';

const Name = (props) => (
    <div>
        <label htmlFor="registerFullName">
            Name <span className="registration-form__asterisk">*</span>
        </label>
        <input id="registerFullName" className="registration-form__input" type="text" value={props.inputValue} onChange={props.handleChange} placeholder="Full name" />                   
    </div>
);

Name.propTypes = {
    inputValue: React.PropTypes.string,
    handleChange: React.PropTypes.func.isRequired
};

export default Name;