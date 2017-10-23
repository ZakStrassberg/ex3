import styled from 'styled-components';

export const StyledInput = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid yellow;
  display: inline-flex;
  text-align: center;
`;

export const NumberInput = styled(StyledInput).attrs({
  type: 'number',
})``;

export const RangeInput = styled.input.attrs({ type: 'range' })``;

export default StyledInput;
