import React from 'react';
import PropTypes from 'prop-types';

import './form-input.style.scss';

const FormInput = ({ handleChange, label, id, ...otherProps }) => (
  <div className="group">
    <input id={id} className="form-input" onChange={handleChange} {...otherProps} />
    {label && (
      <label htmlFor={id} className={`${otherProps.value.length && 'shrink'} form-input-label`}>
        {label}
      </label>
    )}
  </div>
);

FormInput.propTypes = {
  otherProps: PropTypes.oneOfType([PropTypes.object]),
};

export default FormInput;
