import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RadiogroupWrapper = styled.form``;
const Label = styled.label``;
const Radio = styled.input.attrs({ type: 'radio' })``;
const Radiogroup = ({ className, name, items, onClick }) => (
  <RadiogroupWrapper className={className}>
    {items.map(({ label, checked = false, value = label }) => (
      <Label key={`${name}-${label}`}>
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
      checked: PropTypes.bool,
    })
  ).isRequired,
  className: PropTypes.string,
};
Radiogroup.defaultProps = {
  className: '',
};

export default Radiogroup;
