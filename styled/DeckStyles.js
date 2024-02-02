import styled from 'styled-components';


export const DeckContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; 
  gap: 1rem;

  @media (max-width: 600px) {
    justify-content: center; 
  }
`;

export const Title = styled.h1`
    margin: 0 0 1rem 0;
    padding-left: 3rem;
`;
