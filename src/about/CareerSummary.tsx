import {Container} from "semantic-ui-react";

import SummaryStyles from './CareerSummary.module.css'

export const CareerSummary = () => (
  <section className={SummaryStyles.summaryBlock} id='Summary'>
    <Container text>
      <h2 className={SummaryStyles.heading}>Career Summary</h2>
      <p className={SummaryStyles.lead}>
        Senior Fullstack Developer and CTO with 15+ years of experience building scalable products end-to-end
        across fintech, stock trading, gaming, and SaaS. Specializes in microservice architecture on
        Node.js, NestJS, and Bun with React and React Native frontends. Proven track record of hiring
        and leading engineering teams, designing high-load systems, and shipping products from concept
        to production — including fractional-share investing platforms with 100k+ users and fintech
        products that achieved successful acquisition exits.
      </p>
    </Container>
  </section>
)
