import React from 'react';
import { DiReact, DiPython, DiJava, DiDatabase, DiCode, DiNodejsSmall } from 'react-icons/di';
import { FaRobot, FaTools, FaMicrochip } from 'react-icons/fa';  // Additional icons
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, SkillIcon } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>
      I have experience across a wide range of technologies, from programming and robotics to deep learning frameworks and prototyping tools.
    </SectionText>

    <List>
      {/* Programming Languages */}
      <ListItem>
        <SkillIcon>
          <DiCode size="52px" />
        </SkillIcon>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Python, C++, MATLAB, Java, SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Deep Learning & AI */}
      <ListItem>
        <SkillIcon>
          <FaRobot size="40px" />
        </SkillIcon>
        <ListContainer>
          <ListTitle>Deep Learning & AI</ListTitle>
          <ListParagraph>
            TensorFlow, PyTorch, Keras, HuggingFace, OpenCV, Caffe
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Libraries & Tools */}
      <ListItem>
        <SkillIcon>
          <DiReact size="48px" />
        </SkillIcon>
        <ListContainer>
          <ListTitle>Libraries & Tools</ListTitle>
          <ListParagraph>
            NumPy, Pandas, Scikit-learn, ROS, Gazebo, Git, Docker, SLURM
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Control Systems & Robotics */}
      <ListItem>
        <SkillIcon>
          <FaRobot size="40px" />
        </SkillIcon>
        <ListContainer>
          <ListTitle>Control Systems & Robotics</ListTitle>
          <ListParagraph>
            Model Predictive Control (MPC), Kalman Filters, SLAM, Multi-robot Coordination
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Simulation & Prototyping */}
      <ListItem>
        <SkillIcon>
          <FaTools size="40px" />
        </SkillIcon>
        <ListContainer>
          <ListTitle>Simulation & Prototyping</ListTitle>
          <ListParagraph>
            SOLIDWORKS, CATIA, HIL, 3D Printing, Microsoft AirSim
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Embedded Systems & Security */}
      <ListItem>
        <SkillIcon>
          <FaMicrochip size="40px" />
        </SkillIcon>
        <ListContainer>
          <ListTitle>Embedded Systems & Security</ListTitle>
          <ListParagraph>
            Microcontrollers, FPGAs, Embedded Linux, Cyber-Physical Systems Security
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;