import styled from 'styled-components';

// Container for the header
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

// Logo and title
export const Div1 = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

// Navigation links container
export const Div2 = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  flex: 2;  /* This will give it more space and spread evenly */
  
  li {
    margin: 0 1.5rem;  /* Space between each navigation item */
  }
`;

// Social icons container
export const Div3 = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  a {
    margin-left: 1rem;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.2);
    }
  }
`;

// Styled component for navigation links
export const NavLink = styled.a`
  font-size: 1.6rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #d0bb57;
  }
`;

// Styled component for social icons
export const SocialIcons = styled.a`
  color: white;
  padding: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
