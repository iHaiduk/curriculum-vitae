import {Container, Header, Image} from "semantic-ui-react";

import avatar from '../assets/avatar_black.webp'
import linkedin from '../assets/linkedin-qr.png'
import {resumeInfo} from "../resume.ts";
import GlobalStyles from '../global.module.css'

import AboutStyles from './About.module.css'

export const About = () => (
  <>
    <header className={AboutStyles.block}>
      <Image src={avatar} className={AboutStyles.avatarImage} alt="Ihor Haiduk – AI Fullstack Engineer / CTO, MCP, React | Node.js" />
      <div className={AboutStyles.hiddenLayer} />
      <h1 className={AboutStyles.title}>{resumeInfo.name}</h1>
      <div className={AboutStyles.subTitle}>
        {resumeInfo.label}
      </div>
      <nav className={AboutStyles.shareBlock} aria-label="Social profiles">
        {
          resumeInfo.profiles.map(({network, url, Icon}) => (
            <a href={url} key={url} target="_blank" rel="noopener noreferrer" title={network} aria-label={network}>
              <Icon className={AboutStyles.icon} aria-hidden="true" focusable="false" />
            </a>
          ))
        }
      </nav>
      <address className={AboutStyles.contact}>
        <span className={AboutStyles.contactElement}>Email: <a href={`mailto:${resumeInfo.email}`} title="Email">{resumeInfo.email}</a></span>
      </address>
      <img src={linkedin} className={AboutStyles.linkedIn} alt="QR Code on LinkedIn" />
    </header>
    <Container text className={AboutStyles.aboutBlock} id='About'>
      <Header as='h2' className={GlobalStyles.title}>About</Header>
      <p>
        {resumeInfo.summary}
      </p>
    </Container>
    <Container text className={AboutStyles.langBlock} id='Language'>
      <p>
        <b>Languages</b>: English B2 (Upper-Intermediate), Ukrainian (Native)
      </p>
    </Container>
  </>
)
