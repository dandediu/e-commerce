import React from 'react';
import PropTypes from 'prop-types';

import { Group, Label, Input } from './form-input.styles';

const FormInput = ({ handleChange, label, id, ...otherProps }) => (
  <Group>
    <Input id={id} onChange={handleChange} {...otherProps} />
    {label && (
      <Label htmlFor={id} isShrink={otherProps.value.length}>
        {label}
      </Label>
    )}
  </Group>
);

FormInput.propTypes = {
  otherProps: PropTypes.oneOfType([PropTypes.object]),
};

export default FormInput;
