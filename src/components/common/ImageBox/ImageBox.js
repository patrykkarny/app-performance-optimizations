import styled from 'styled-components';

export const ImageBox = styled.div`
  width: ${({ width }) => width || '240px'};
  height: ${({ height }) => height || 'auto'};

  img {
    display: block;
    max-width: 100%;
  }
`;
