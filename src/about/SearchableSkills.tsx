import {resumeInfo} from "../resume.ts";

import SkillsStyles from './SearchableSkills.module.css'

const roleKeywords = [
  'CTO', 'Chief Technology Officer', 'Tech Lead', 'Technical Lead',
  'Senior Fullstack Developer', 'Senior Full Stack Developer', 'Senior Backend Developer',
  'Frontend Team Lead', 'Full Stack Engineer', 'Backend Engineer', 'Frontend Engineer',
  'Software Architect', 'Engineering Manager', 'VP of Engineering',
  'available for hire', 'open to work', 'seeking position', 'looking for opportunities',
  'freelance developer', 'contract developer', 'remote developer',
]

const domainKeywords = [
  'fintech', 'fintech developer', 'stock trading systems', 'broker integration',
  'payment processing', 'payment integration', 'trading platform',
  'SaaS', 'SaaS platforms', 'SaaS development', 'multi-tenant',
  'gaming', 'game development', 'casino', 'betting platform',
  'marketplace', 'e-commerce', 'real-time data', 'real-time systems',
  'high-load systems', 'high traffic', 'scalable architecture',
  'fractional shares', 'investing platform', 'mobile investing app',
  'white-label platform', 'API platform', 'unified API',
  'developer tools', 'admin panel', 'dashboard',
  'microservices', 'microservice architecture', 'distributed systems',
  'event-driven architecture', 'message queue', 'CQRS', 'event sourcing',
  'DevOps', 'CI/CD', 'cloud infrastructure', 'serverless',
  'team leadership', 'team building', 'hiring', 'mentoring',
  'agile', 'scrum', 'product development', 'startup', 'CTO as a service',
]

const techKeywords = [
  'TypeScript', 'JavaScript', 'Node.js', 'Node.js developer',
  'NestJS', 'NestJS developer', 'Bun', 'Bun.js',
  'React', 'React developer', 'React.js', 'React Native', 'React Native developer',
  'Next.js', 'NextJS', 'Vue.js', 'Vue.js developer',
  'PostgreSQL', 'PostgreSQL developer', 'MongoDB', 'MongoDB developer',
  'Redis', 'Redis caching', 'RabbitMQ', 'message broker',
  'GraphQL', 'Apollo', 'Apollo GraphQL', 'REST API', 'RESTful API',
  'Docker', 'Docker containers', 'Kubernetes', 'AWS', 'Amazon Web Services',
  'Prisma', 'TypeORM', 'Sequelize', 'database design', 'database architecture',
  'Express.js', 'Express', 'Koa', 'ElysiaJS', 'Fastify',
  'Redux', 'Redux Toolkit', 'Redux Saga', 'state management',
  'WebSocket', 'Socket.IO', 'real-time', 'Server-Sent Events',
  'Elasticsearch', 'OpenSearch', 'search engine',
  'Grafana', 'Prometheus', 'monitoring', 'observability',
  'CI/CD', 'GitHub Actions', 'AWS Pipelines', 'Jenkins',
  'git', 'GitHub', 'GitLab', 'version control',
  'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'Styled Components',
  'Jest', 'testing', 'unit testing', 'integration testing',
  'Webpack', 'Vite', 'build tools', 'bundler',
  'PHP', 'Laravel', 'Symfony', 'Yii',
  'MySQL', 'SQL', 'NoSQL',
  'Web3', 'blockchain', 'smart contracts',
  'Unity', 'game engine', 'Cocos',
  'Konva.js', 'canvas', 'HTML5 canvas',
  'Node-RED', 'ESPHome', 'Home Assistant', 'IoT', 'smart home',
  'API design', 'API development', 'API integration',
  'system design', 'system architecture', 'technical architecture',
  'performance optimization', 'profiling', 'load testing',
]

export const SearchableSkills = () => (
  <div className={SkillsStyles.srOnly} aria-hidden="true">
    <h2>Career Keywords and Skills</h2>

    <section>
      <h3>Role Titles</h3>
      <p>{roleKeywords.join(', ')}</p>
    </section>

    <section>
      <h3>Domain Expertise</h3>
      <p>{domainKeywords.join(', ')}</p>
    </section>

    <section>
      <h3>Technical Skills</h3>
      <p>{techKeywords.join(', ')}</p>
    </section>

    <section>
      <h3>Work History Summary</h3>
      {resumeInfo.projects.filter(p => p.isActive).map(p => (
        <p key={p.name}>
          {p.name} — {p.position} at {p.company} ({p.start.getFullYear()}–{p.end?.getFullYear() ?? 'present'}).
          {p.role} {p.description}
        </p>
      ))}
    </section>

    <section>
      <h3>Education and Certifications</h3>
      {resumeInfo.education.map((e, i) => (
        <p key={i}>{e.position} in {e.education} from {e.place} ({e.start.getFullYear()}–{e.end?.getFullYear()}).</p>
      ))}
      {resumeInfo.licenses.map((l, i) => (
        <p key={i}>{l.name} ({l.date.getFullYear()}).</p>
      ))}
    </section>
  </div>
)
