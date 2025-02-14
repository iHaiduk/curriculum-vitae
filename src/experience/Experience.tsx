import {Container, Header} from "semantic-ui-react";

import {resumeInfo} from "../resume.ts";
import GlobalStyles from '../global.module.css'
import {getDateDifference} from "../utils.ts";

import ExperienceStyles from './Experience.module.css'

export const Experience = () => (
  <Container text className={ExperienceStyles.titleBlock} id='Experience'>
    <Header as='h2' className={GlobalStyles.title}>Work Experience</Header>

    <div className={ExperienceStyles.expMainBlock}>
      {resumeInfo.projects.filter(project => project.isActive).map(project => (
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
            <div className={ExperienceStyles.expRightDescription}>
              {project.description}
            </div>
            <div className={ExperienceStyles.expRightDescription}>
              Team: {project.team} peoples
            </div>
            <div className={ExperienceStyles.expRightIconBlock}>
              {project.skills.map(({ name, Icon, link }: any) => (
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
