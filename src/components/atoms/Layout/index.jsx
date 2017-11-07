import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
`;

export const FlexBox = styled.div`
  flex: 0 0 ${({ columns = 1 }) => `${100 / columns}%`};
`;
