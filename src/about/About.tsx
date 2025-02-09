import {Container, Header, Icon, Image} from "semantic-ui-react";
import {SemanticICONS} from "semantic-ui-react/dist/commonjs/generic";

import avatar from '../assets/avatar_black.png'
import linkedin from '../assets/linkedin-qr.png'

import AboutStyles from './About.module.css'
import {resumeInfo} from "../resume.ts";

export const About = () => (
  <>
    <div className={AboutStyles.block}>
      <Image src={avatar} className={AboutStyles.avatarImage} />
      <div className={AboutStyles.hiddenLayer} />
      <Header as='h1' className={AboutStyles.title}>{resumeInfo.name}</Header>
      <div className={AboutStyles.subTitle}>
        <ul className={AboutStyles.listTypes}>
          <li>Frontend</li>
          <li>Backend</li>
          <li>Mobile</li>
          <li>Fullstack</li>
          <li>Frontend</li>
        </ul>
        <span className={AboutStyles.printType}>Fullstack </span>
        {resumeInfo.label}
      </div>
      <div className={AboutStyles.shareBlock}>
        {
          resumeInfo.profiles.map((current) => (
            <a href={current.url} target="_blank" title={current.network}>
              <Icon name={`${current.icon} square` as SemanticICONS} size='big' className={AboutStyles.icon} />
            </a>
          ))
        }
      </div>
      <div className={AboutStyles.contact}>
        <span className={AboutStyles.contactElement}>Email: <a href={`mailto:${resumeInfo.email}`} target="_blank" title="Email">{resumeInfo.email}</a></span>
        <span className={AboutStyles.contactElement}>Phone: <a href={`tel:${resumeInfo.phone}`} target="_blank" title="Phone number">{resumeInfo.phone}</a></span>
      </div>
      <Image src={linkedin} className={AboutStyles.linkedIn} />
    </div>
    <Container text className={AboutStyles.aboutBlock} id='About'>
      <Header as='h3' className={AboutStyles.about}>About</Header>
      <p>
        {resumeInfo.summary}
      </p>
    </Container>
  </>
)
