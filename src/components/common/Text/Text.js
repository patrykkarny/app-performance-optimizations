import styled from 'styled-components';

export const TextHeader = styled.h1`
  font-size: ${({ size }) => size || '18px'};
  font-weight: 700;
  color: ${({ color, theme }) => color || theme.color.dark};
  margin: 0;
`;

export const Text = styled.p`
  font-size: ${({ size }) => size || '14px'};
  color: ${({ color, theme }) => color || theme.color.gray};
  font-weight: 400;
  margin: 0;
`;

export const TextTitle = TextHeader.withComponent('h2');
