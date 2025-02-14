import {Container, Header} from "semantic-ui-react";

import GlobalStyles from '../global.module.css'
import {resumeInfo} from "../resume.ts";

import ExperienceStyles from './Skills.module.css'

export const Skills = () => (
  <Container text className={ExperienceStyles.titleBlock} id='Skills'>
    <Header as='h3' className={GlobalStyles.title}>Skills</Header>

    <div className={ExperienceStyles.skillsBlock}>
      {
        resumeInfo.skills.map((block) => (
          <div className={ExperienceStyles.skillBlockWrapper} key={block.name}>
            <div className={ExperienceStyles.skillBlockType}>
              {block.name}
            </div>
            <ul className={ExperienceStyles.skillBlock}>
              {
                block.list.map(({name, Icon, link}) => (
                  <li className={ExperienceStyles.skill} key={name}>
                    {Icon && <Icon className={ExperienceStyles.skillIcon} />}
                    {link && <img src={link} className={ExperienceStyles.skillIcon} alt={name} />}
                    <p className={ExperienceStyles.skillTitle}>{name}</p>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  </Container>
)
