import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({ name, label, checked }) {
  const input = <input type="checkbox" name={name} value={name} checked={checked} />;
  return label ? (
    <label htmlFor={name}>
      <span>{label}</span>
      {input}
    </label>
  ) : (
    input
  );
}

Checkbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  label: null,
  checked: false,
  name: 'checkbox',
}
