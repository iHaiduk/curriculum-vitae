import {Container} from "semantic-ui-react";

import SummaryStyles from './CareerSummary.module.css'

export const CareerSummary = () => (
  <section className={SummaryStyles.summaryBlock} id='Summary'>
    <Container text>
      <h2 className={SummaryStyles.heading}>Career Summary</h2>
      <p className={SummaryStyles.lead}>
        AI Fullstack Engineer / CTO with 15+ years of shipping products end-to-end.
        I turned a failing fintech startup into a 100k+ user platform and led it to a successful acquisition.
        Today I build MCP servers and integrate AI agents into development workflows, delivering entire products with AI at the core.
        My track record spans fintech, stock trading, gaming, and SaaS — from hiring engineering teams
        to designing high-load microservice architectures on Node.js, NestJS, and Bun with React and React Native.
      </p>
    </Container>
  </section>
)
