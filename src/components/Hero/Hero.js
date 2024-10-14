import React from 'react';

import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Joshua Jose <br />
          <p style={{fontSize: '32px'}}>Robotics Engineer</p>
        </SectionTitle>
        <SectionText style={{fontSize: '20px'}}>
        I am a passionate robotics engineer involved in the design, development, and deployment of intelligent autonomous systems. Combining practical experience in UAV production, advanced robotics with a foundation in AI, I bring bleeding-edge technologies—SLAM, deep learning, and control systems—together to turn innovative ideas into reality. From fine-tuning large language models to testing, building, and operating autonomous rovers and UAVs, I like taking complex challenges into effective engineering and robust design. Let us build the future of robotics!
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;