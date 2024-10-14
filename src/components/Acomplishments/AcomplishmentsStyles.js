import styled from 'styled-components';

// Compact grid layout for awards
export const CompactBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
`;

export const CompactBox = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const CompactTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

export const CompactText = styled.p`
  font-size: 1.2rem;
  color: #ddd;
`;