import styled from 'styled-components';

export const HeroHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 50px;
  min-height: 440px;

  h1 {
    margin-top: 30px;
  }
`;
