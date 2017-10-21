import styled from 'styled-components';

export const StyledInput = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid yellow;
  display: inline-flex;
  text-align: center;
`;

export const StyledNumberInput = styled(StyledInput).attrs({ type: 'number' });

export default StyledInput;
