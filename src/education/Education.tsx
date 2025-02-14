import {Container, Header} from "semantic-ui-react";

import {resumeInfo} from "../resume.ts";
import {getDateDifference} from "../utils.ts";

import EducationStyles from './Education.module.css'
import ExperienceStyles from "../experience/Experience.module.css";

export const Education = () => (
  <>
    <Container text className={EducationStyles.titleBlock} id='Education'>
      <Header as='h2' className={EducationStyles.title}>Education</Header>

      <div className={EducationStyles.expMainBlock}>
        {resumeInfo.education.filter(project => project.isActive).map((project, index) => (
          <div className={EducationStyles.expWrapper} key={index}>
            <div className={EducationStyles.expLeft}>
              <div className={EducationStyles.expLeftYear}>
                {project.start.getFullYear()} - {project.end?.getFullYear() ?? 'Current'}
              </div>
              <div className={EducationStyles.expLeftLong}>
                {getDateDifference(project.start, project.end)}
              </div>
              <div className={EducationStyles.expLeftPosition}>
                {project.position}
              </div>
            </div>
            <div className={EducationStyles.expRight}>
              <div className={EducationStyles.expRightName}>
                {project.education}
              </div>
              <div className={EducationStyles.expRightDescription}>
                <a href={project.link} target="_blank"  className={EducationStyles.expRightLink}>{project.place}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>

    <Container text className={EducationStyles.titleBlock} id='Licenses'>
      <Header as='h2' className={EducationStyles.title}>Licenses & certifications</Header>

      <div className={EducationStyles.expMainBlock}>
        {resumeInfo.licenses.filter(project => project.isActive).map((project, index) => (
          <div className={EducationStyles.expWrapper} key={index}>
            <div className={EducationStyles.expLeft}>
              <div className={EducationStyles.expLeftYear}>
                {project.date.getFullYear()}
              </div>
            </div>
            <div className={EducationStyles.expRight}>
              <div className={EducationStyles.expRightName}>
                <a href={project.link} target="_blank"  className={EducationStyles.expRightLink}>{project.name}</a>
              </div>
              <div className={ExperienceStyles.expRightDescription}>
                Date: {project.date.getDate()}/{project.date.getMonth()}/{project.date.getFullYear()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>

    <Container text className={EducationStyles.titleBlock} id='Hobbies'>
      <Header as='h2' className={EducationStyles.title}>Hobbies</Header>

      <div className={EducationStyles.expMainBlock}>
        {resumeInfo.hobbies.filter(project => project.isActive).map((project, index) => (
          <div className={EducationStyles.expWrapper} key={index}>
            <div className={EducationStyles.expLeft}>
              <div className={EducationStyles.expLeftYear}>
                {project.start.getFullYear()} - {project.end?.getFullYear() ?? 'Current'}
              </div>
              <div className={EducationStyles.expLeftLong}>
                {getDateDifference(project.start, project.end)}
              </div>
              <div className={EducationStyles.expLeftPosition}>
                <a href={project.positionLink} target="_blank"  className={EducationStyles.expRightLink}>{project.position}</a>
              </div>
            </div>
            <div className={EducationStyles.expRight}>
              <div className={EducationStyles.expRightName}>
                {project.name}
              </div>
              <div className={EducationStyles.expRightDescription}>
                {project.place}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </>
)
