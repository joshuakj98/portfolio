import styled, { keyframes } from 'styled-components';

// Fade-in animation for smoother entry
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem;
  margin: 0 auto;
  max-width: 1000px;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

export const ExperienceLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #fff;
  transform: translateX(-50%);
`;

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  align-self: ${(props) => (props.left ? 'flex-start' : 'flex-end')};
  text-align: ${(props) => (props.left ? 'right' : 'left')};
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    text-align: center;
    align-self: center;
  }
`;

export const ExperienceTitle = styled.h3`
  font-size: 1.8rem;
  color: #fff;
`;

export const ExperienceText = styled.p`
  font-size: 1.4rem;
  color: #ddd;
`;

export const Connector = styled.div`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? 'right: -20px' : 'left: -20px')};
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
  }
`;

// College Container at the top
export const CollegeContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const CollegeTitle = styled.h2`
  font-size: 2.4rem;
  color: #fff;
`;

export const CollegeText = styled.p`
  font-size: 1.6rem;
  color: #ddd;
  margin-top: 1rem;
`;