import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, ...props }) => {
  switch (type) {
    case 'input':
      return <input type="submit" {...props} />;
    case 'link':
      return <a {...props} />;
    default:
      return <button {...props} />;
  }
};

Button.propTypes = {
  type: PropTypes.oneOf(['input', 'link', 'button']),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
