import {Container, Header, Image} from "semantic-ui-react";

import ExperienceStyles from './Experience.module.css'
import {resumeInfo} from "../resume.ts";

export const Experience = () => (
  <Container text className={ExperienceStyles.titleBlock} id='Experience'>
    <Header as='h3' className={ExperienceStyles.title}>Work Experience</Header>

    <div className={ExperienceStyles.expMainBlock}>
      {resumeInfo.projects.map(project => (
        <div className={ExperienceStyles.expWrapper}>
          <div className={ExperienceStyles.expLeft}>
            <div className={ExperienceStyles.expLeftYear}>
              {project.start} - {project.end}
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
              {project.name} ( <a href={project.link} target="_blank"  className={ExperienceStyles.expRightLink}>{project.link}</a> )
            </div>
            <div className={ExperienceStyles.expRightDescription}>
              {project.description}
            </div>
            <div className={ExperienceStyles.expRightDescription}>
              Team: {project.team} peoples
            </div>
            <div className={ExperienceStyles.expRightIconBlock}>
              {project.skills.map(({ name, Icon, link }) => (
                <>
                  {Icon && <Icon className={ExperienceStyles.expRightIcon} title={name} />}
                  {link && <Image src={link} className={ExperienceStyles.expRightIcon} title={name} />}
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>
)
