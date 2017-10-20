import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';

const Text = ({ value, name, onChange }) => (
  <input type="text" value={value} name={name} onChange={onChange} />
);

Text.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Text.defaultProps = {
  name: 'textbox',
  onChange: noop,
};

export default Text;
