import styled from 'styled-components';

export const CardImageWrapper = styled.div`
  border-radius: 5px;
  max-width: 400px;
  margin: 20px;

  .text-content {
    background-color: ${({ theme }) => theme.color.light};
    padding: 20px;
    min-height: 200px;

    h2 {
      margin-bottom: 10px;
    }
  }
`;
