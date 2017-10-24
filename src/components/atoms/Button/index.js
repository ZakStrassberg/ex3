import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { noop } from 'lodash';

class UnstyledButton extends PureComponent {
  render() {
    const { children, ...props } = this.props;
    return <button {...props}>{children}</button>;
  }
}

UnstyledButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

UnstyledButton.defaultProps = {
  className: '',
  onClick: noop,
  size: 'medium',
};

export const StyledButton = styled(UnstyledButton)`
  padding: 6px;
`;

export default StyledButton;
