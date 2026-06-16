import type {IconType} from "react-icons";
import {Container, Header} from "semantic-ui-react";

import {resumeInfo} from "../resume.ts";
import GlobalStyles from '../global.module.css'
import {getDateDifference} from "../utils.ts";

import ExperienceStyles from './Experience.module.css'

interface Skill {
  name: string;
  Icon?: IconType;
  link?: string;
}

interface Project {
  isActive: boolean;
  name: string;
  link?: string;
  start: Date;
  end?: Date;
  company: string;
  companyLink: string;
  position: string;
  team: string;
  role?: string;
  achievements?: string[];
  description?: string;
  skills: Skill[];
}

export const Experience = () => (
  <Container text className={ExperienceStyles.titleBlock} id='Experience'>
    <Header as='h2' className={GlobalStyles.title}>Work Experience</Header>

    <div className={ExperienceStyles.expMainBlock}>
      {(resumeInfo.projects as Project[]).filter(project => project.isActive).map((project) => (
        <div className={ExperienceStyles.expWrapper} key={project.name}>
          <div className={ExperienceStyles.expLeft}>
            <div className={ExperienceStyles.expLeftYear}>
              {project.start.getFullYear()} - {project.end?.getFullYear() ?? 'Current'}
            </div>
            <div className={ExperienceStyles.expLeftLong}>
              {getDateDifference(project.start, project.end)}
            </div>
            <div className={ExperienceStyles.expLeftPosition}>
              {project.position}
            </div>
            <div className={ExperienceStyles.expLeftCompany}>
              <a href={project.companyLink} target="_blank">{project.company}</a>
            </div>
          </div>
          <div className={ExperienceStyles.expRight}>
            <div className={ExperienceStyles.expRightName}>
              {project.name} {project.link && ( <a href={project.link} target="_blank"  className={ExperienceStyles.expRightLink}>{project.link}</a> )}
            </div>
            {project.role && (
              <div className={ExperienceStyles.expRightRole}>
                {project.role}
              </div>
            )}
            {project.achievements ? (
              <ul className={ExperienceStyles.expRightAchievements}>
                {project.achievements.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <div className={ExperienceStyles.expRightDescription}>
                {project.description}
              </div>
            )}
            <div className={ExperienceStyles.expRightDescription}>
              Team: {project.team} peoples
            </div>
            <div className={ExperienceStyles.expRightIconBlock}>
              {project.skills.map(({ name, Icon, link }) => (
                <span key={link}>
                  {Icon && <Icon className={ExperienceStyles.expRightIcon} title={name} />}
                  {link && <img src={link} className={ExperienceStyles.expRightIcon} title={name} alt={name} />}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>
)
