import styled from 'styled-components';

export const HeroHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 30px;
  text-align: center;

  h1 {
    margin-top: 15px;
  }

  @media screen and (min-width: 960px) {
    padding: 50px;
    min-height: 440px;

    h1 {
      margin-top: 30px;
      font-size: 52px;
    }

    & > div {
      width: 240px;
    }
  }
`;
