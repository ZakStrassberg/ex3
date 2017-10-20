import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

const Field = ({ type, label, name, ...inputProps }) => {
  let El = <input type={type} {...inputProps} name={name} />;
  switch (type) {
    case 'textarea':
      El = <textarea {...inputProps} name={name} />;
      break;
    default:
      break;
  }
  return label ? (
    <label htmlFor={name}>
      <span>{label}</span>
      {El}
    </label>
  ) : (
    El
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
