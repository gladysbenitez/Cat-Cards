import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 100%; 
  max-width: 300px; 
`;

export const CardLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: start; 
  padding: 0.5rem 0; 
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

export const CardBody = styled.p`
  color: #666;
`;

export const CardLink = styled.a`
  padding: 0.25rem 0.5rem;
  color: #0070f3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;