import { noop } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Caption } from '../../atoms/Typography';
import { StyledCheckbox } from '../../atoms/Checkbox';
import { StyledLabel } from '../../atoms/Label';
import { StyledTextarea } from '../../atoms/Textarea';
import TextInput, { NumberInput } from '../../atoms/Input';

const InitiativeInput = styled(NumberInput)`
  width: 45px;
`;

const Field = ({ type, label, name, ...inputProps }) => {
  let El;
  switch (type) {
    case 'textarea':
      El = StyledTextarea;
      break;
    case 'number':
      El = name === 'initiative' ? InitiativeInput : NumberInput;
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
      <Caption>{label}</Caption>
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
