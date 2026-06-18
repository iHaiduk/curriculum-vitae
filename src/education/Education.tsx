import {Header} from "semantic-ui-react";

import {resumeInfo} from "../resume.ts";
import {getDateDifference} from "../utils.ts";

import EducationStyles from './Education.module.css'
import ExperienceStyles from "../experience/Experience.module.css";

const formatDateISO = (d: Date) => d.toISOString().split('T')[0];

export const Education = () => (
  <>
    <section className={EducationStyles.titleBlock} id='Education'>
      <Header as='h2' className={EducationStyles.title}>Education</Header>

      <div className={EducationStyles.expMainBlock}>
        {resumeInfo.education.filter(project => project.isActive).map((project, index) => (
          <article className={EducationStyles.expWrapper} key={index}>
            <div className={EducationStyles.expLeft}>
              <div className={EducationStyles.expLeftYear}>
                <time dateTime={formatDateISO(project.start)}>{project.start.getFullYear()}</time>
                {' – '}
                {project.end ? <time dateTime={formatDateISO(project.end)}>{project.end.getFullYear()}</time> : 'Current'}
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
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={EducationStyles.expRightLink}>{project.place}</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className={EducationStyles.titleBlock} id='Licenses'>
      <Header as='h2' className={EducationStyles.title}>Licenses & certifications</Header>

      <div className={EducationStyles.expMainBlock}>
        {resumeInfo.licenses.filter(project => project.isActive).map((project, index) => (
          <article className={EducationStyles.expWrapper} key={index}>
            <div className={EducationStyles.expLeft}>
              <div className={EducationStyles.expLeftYear}>
                <time dateTime={formatDateISO(project.date)}>{project.date.getFullYear()}</time>
              </div>
            </div>
            <div className={EducationStyles.expRight}>
              <div className={EducationStyles.expRightName}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={EducationStyles.expRightLink}>{project.name}</a>
              </div>
              <div className={ExperienceStyles.expRightDescription}>
                Date: <time dateTime={formatDateISO(project.date)}>{project.date.getDate()}/{project.date.getMonth()}/{project.date.getFullYear()}</time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className={EducationStyles.titleBlock} id='Hobbies'>
      <Header as='h2' className={EducationStyles.title}>Hobbies</Header>

      <div className={EducationStyles.expMainBlock}>
        {resumeInfo.hobbies.filter(project => project.isActive).map((project, index) => (
          <article className={EducationStyles.expWrapper} key={index}>
            <div className={EducationStyles.expLeft}>
              <div className={EducationStyles.expLeftYear}>
                <time dateTime={formatDateISO(project.start)}>{project.start.getFullYear()}</time>
                {' – '}
                {project.end ? <time dateTime={formatDateISO(project.end)}>{project.end.getFullYear()}</time> : 'Current'}
              </div>
              <div className={EducationStyles.expLeftLong}>
                {getDateDifference(project.start, project.end)}
              </div>
              <div className={EducationStyles.expLeftPosition}>
                <a href={project.positionLink} target="_blank" rel="noopener noreferrer" className={EducationStyles.expRightLink}>{project.position}</a>
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
          </article>
        ))}
      </div>
    </section>
  </>
)
