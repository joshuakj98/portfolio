import styled from 'styled-components';

// List container styles
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ListItem = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ListContainer = styled.div`
  margin-top: 10px;
`;

export const ListTitle = styled.h3`
  font-size: 1.8rem;
  color: #fff;
`;

export const ListParagraph = styled.p`
  font-size: 1.4rem;
  color: #ddd;
`;

export const SkillIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: #fff;
  transition: color 0.3s ease;
  &:hover {
    color: #d0bb57;  /* Changes the color of the icon on hover */
  }
`;