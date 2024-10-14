import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => (
        <BlogCard key={i}>
          <Img src={p.image} alt={p.title} /> {/* No need for placeholder */}
          <TitleContent>
            <HeaderThree title>{p.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{p.description}</CardInfo>
          <div>
            <TagList>
              {p.tags.map((t, i) => (
                <Tag key={i}>{t}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={p.visit}>GitHub</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <SectionDivider />
  </Section>
);

export default Projects;