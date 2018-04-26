import styled from 'styled-components';

export const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 960px) {
    padding: 30px;
  }
`;
