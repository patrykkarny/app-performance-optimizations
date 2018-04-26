import styled from 'styled-components';

export const StyledImage = styled.img`
  width: 100%;
  display: block;
  height: auto;
  filter: ${({ isLoaded }) => (isLoaded ? 'none' : 'blur(10px)')};
  transition: filter 2s ease-in-out;
  transform: scale(1.2);
`;
