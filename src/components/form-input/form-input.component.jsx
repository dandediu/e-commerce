import React from 'react';
import PropTypes from 'prop-types';

import './form-input.style.scss';

const FormInput = ({ handleChange, label, id, ...otherProps }) => (
  <div className="group">
    <input className="form-input" id={id} onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        htmlFor={id}
        className={`${otherProps.value.length ? 'shrink' : null} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

FormInput.propTypes = {};

export default FormInput;
