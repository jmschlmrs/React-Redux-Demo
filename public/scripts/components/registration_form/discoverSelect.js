import React from 'react';

const DiscoverSelect = (props) => (
    <fieldset className="registration-form__input-section">
        <label htmlFor="discoverSelect">
            Where did you hear about TUHUR?
        </label>
        <select multiple id="discoverSelect" value={props.inputValue} onChange={props.handleChange}>
            <option value="word of mouth">Word of mouth</option>
            <option value="search">Search</option>
            <option value="social">Social</option>
        </select>
    </fieldset>
);

DiscoverSelect.propTypes = {
    inputSelect: React.PropTypes.array,
    handleChange: React.PropTypes.func.isRequired
};

export default DiscoverSelect;