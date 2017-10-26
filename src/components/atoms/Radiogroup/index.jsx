import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { noop } from 'lodash';

const RadiogroupWrapper = styled.form``;
const Label = styled.label``;
const Radio = styled.input.attrs({ type: 'radio' })``;
const Radiogroup = ({ className, name, items, onClick }) => (
  <RadiogroupWrapper className={className}>
    {items.map(({ label, checked = false, value = label }) => (
      <Label key={`${name}-${label}`} className={checked ? 'active' : null}>
        <span>{label}</span>
        <Radio name={name} value={value} checked={checked} onClick={onClick} />
      </Label>
    ))}
  </RadiogroupWrapper>
);

Radiogroup.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string,
      checked: PropTypes.bool,
    })
  ).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
Radiogroup.defaultProps = {
  className: '',
  onClick: noop,
};

export default Radiogroup;

export const StyledRadiogroup = styled(Radiogroup)`
  display: flex;
  box-sizing: border-box;
  input {
    display: none;
  }
  label {
    box-sizing: border-box;
    flex: 0 0 33%;
    // flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    background: red;
    padding: 4px 2px 4px 2px;
    &:first-child {
      padding-left: 4px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:last-child {
      padding-right: 4px;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
    &.active {
      background: yellow;
    }
    &:hover {
      background: blue;
    }
  }
`;
