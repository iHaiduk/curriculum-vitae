import {Container, Header, Image} from "semantic-ui-react";

import avatar from '../assets/avatar_black.png'
import linkedin from '../assets/linkedin-qr.png'
import {resumeInfo} from "../resume.ts";
import GlobalStyles from '../global.module.css'

import AboutStyles from './About.module.css'

export const About = () => (
  <>
    <div className={AboutStyles.block}>
      <Image src={avatar} className={AboutStyles.avatarImage} alt="Ihor Haiduk – Fullstack Developer, ReactJS | Node.js" />
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
          resumeInfo.profiles.map(({network, url, Icon}) => (
            <a href={url} key={url} target="_blank" title={network}>
              <Icon className={AboutStyles.icon} />
            </a>
          ))
        }
      </div>
      <div className={AboutStyles.contact}>
        <span className={AboutStyles.contactElement}>Email: <a href={`mailto:${resumeInfo.email}`} target="_blank" title="Email">{resumeInfo.email}</a></span>
        <span className={AboutStyles.contactElement}>Phone: <a href={`tel:${resumeInfo.phone}`} target="_blank" title="Phone number">{resumeInfo.phone}</a></span>
      </div>
      <img src={linkedin} className={AboutStyles.linkedIn} alt="QR Code on LinkedIn" />
    </div>
    <Container text className={AboutStyles.aboutBlock} id='About'>
      <Header as='h2' className={GlobalStyles.title}>About</Header>
      <p>
        {resumeInfo.summary}
      </p>
    </Container>
    <Container text className={AboutStyles.langBlock} id='Language'>
      <p>
        <b>Languages</b>: English B1 (Intermediate), Ukrainian (Native)
      </p>
    </Container>
  </>
)
