import { noop } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import { StyledCheckbox } from '../../atoms/Checkbox';
import { StyledLabel } from '../../atoms/Label';
import { StyledTextarea } from '../../atoms/Textarea';
import TextInput, { StyledNumberInput } from '../../atoms/Input';

const Field = ({ type, label, name, ...inputProps }) => {
  let El;
  switch (type) {
    case 'textarea':
      El = StyledTextarea;
      break;
    case 'number':
      El = StyledNumberInput;
      break;
    case 'Checkbox':
      El = StyledCheckbox;
      break;
    case 'text':
    default:
      El = TextInput;
      break;
  }
  return label ? (
    <StyledLabel htmlFor={name}>
      <span>{label}</span>
      <El {...{ ...inputProps, name }} />
    </StyledLabel>
  ) : (
    <El {...{ ...inputProps, name }} />
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'checkbox', 'textarea']),
  label: PropTypes.string,
  // TODO: Write custom validator that takes in type and checks proptypes
  value: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Field.defaultProps = {
  type: 'text',
  label: null,
  value: '',
  onChange: noop,
};

export default Field;
