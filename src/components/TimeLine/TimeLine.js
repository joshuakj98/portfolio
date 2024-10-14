import React from 'react';
import { ExperienceContainer, ExperienceLine, ExperienceContent, ExperienceTitle, ExperienceText, Connector, CollegeContainer, CollegeTitle, CollegeText } from './TimeLineStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

// Experiences data
const experiences = [
  {
    title: "Production Engineer I",
    company: "NewSpace Research and Technologies",
    time: "Jun 2021 - Jun 2022",
    description: `Oversaw the creation and setup of production lines for UAVs. Led Flight Operations for customer demos, resulting in contracts worth ~$27 million.`,
  },
  {
    title: "Project Engineer",
    company: "NewSpace Research and Technologies",
    time: "Nov 2020 - May 2021",
    description: `Designed UAV components and led operational demos. Collaborated with autonomy team to develop flight profiles.`,
  },
  {
    title: "Area Manager Intern",
    company: "Amazon",
    time: "Feb 2020 - Jul 2020",
    description: `Led a team of 20 associates, improving supply chain efficiency. Implemented a material flow model reducing errors by ~10%.`,
  },
  {
    title: "Mechanical Engineering Intern",
    company: "ISRO - Indian Space Research Organization",
    time: "May 2019 - Jun 2019",
    description: `Worked on CAD and supported structural engineering efforts.`,
  },
  {
    title: "Structural Engineer",
    company: "AeroMIT",
    time: "Apr 2017 - May 2019",
    description: `Designed structural components for student-led aerospace projects.`,
  },
  {
    title: "Mechanical Engineering Intern",
    company: "Forbes Marshall",
    time: "Jun 2018",
    description: `Assisted in mechanical design and analysis for industrial projects.`,
  },
];

const Timeline = () => {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>

      {/* College Section */}
      <CollegeContainer>
        <CollegeTitle>Master of Science, Robotics</CollegeTitle>
        <CollegeText>
          University of Minnesota, Twin Cities (Sep 2022 - Dec 2024)
          <br />
          Subjects: Machine Learning, AI, NLP, Robot Vision, Deep Learning, Probabilistic Reasoning, Wearable Technology and more.
        </CollegeText>
      </CollegeContainer>

      {/* Experience Timeline */}
      <ExperienceContainer>
        {experiences.map((exp, index) => (
          <ExperienceContent key={index} left={index % 2 === 0} index={index}>
            <ExperienceTitle>
              {exp.title} - <i>{exp.company}</i>
            </ExperienceTitle>
            <ExperienceText>
              <strong>{exp.time}</strong> <br />
              {exp.description}
            </ExperienceText>
            {/* Connector */}
            <Connector left={index % 2 === 0} />
          </ExperienceContent>
        ))}
        <ExperienceLine />
      </ExperienceContainer>
    </Section>
  );
};

export default Timeline;