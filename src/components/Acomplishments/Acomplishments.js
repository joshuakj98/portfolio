import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { CompactBox, CompactBoxes, CompactText, CompactTitle } from './AcomplishmentsStyles';

const awards = [
  { title: "World Rank 5", competition: "SAE AeroDesign East 2019", year: "2019" },
  { title: "World Rank 1", competition: "Design, SAE AeroDesign East 2018", year: "2018" },
  { title: "World Rank 3", competition: "Presentation, SAE AeroDesign East 2018", year: "2018" },
  { title: "Rank 2", competition: "Airbus OP Rahat Competition", year: "2017" },
  { title: "Rank 4", competition: "Boeing Aeromodelling Competition", year: "2017" },
  { title: "Rank 1", competition: "KGA Junior Golf Tournament", year: "2013" }
];

const Accomplishments = () => (
  <Section id="accomplishments">
    <SectionTitle>Achievements</SectionTitle>
    <CompactBoxes>
      {awards.map((award, index) => (
        <CompactBox key={index}>
          <CompactTitle>{award.title}</CompactTitle>
          <CompactText>{award.competition}</CompactText>
          <CompactText>{award.year}</CompactText>
        </CompactBox>
      ))}
    </CompactBoxes>
    <SectionDivider />
  </Section>
);

export default Accomplishments;