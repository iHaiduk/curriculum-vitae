import Styles from './PdfHiddenText.module.css'

const fullRoleText = `
Ihor Haiduk is a Senior Fullstack Developer, CTO, Chief Technology Officer, Tech Lead, Technical Lead,
Software Architect, Engineering Manager, Backend Developer, Frontend Developer, Full Stack Engineer
with 15+ years of experience. Available for hire, open to work, seeking CTO, Tech Lead,
Senior Fullstack Developer, Backend Developer, Frontend Developer, Software Architect positions.
Remote developer, contract developer, freelance developer.
`

const fullDomainText = `
Expertise in fintech, fintech development, stock trading systems, broker integration, Exante integration,
Alpaca integration, payment processing, payment integration, trading platform development,
SaaS, SaaS platforms, SaaS development, multi-tenant architecture,
gaming, game development, casino platform, betting platform,
marketplace development, e-commerce, real-time data, real-time systems,
high-load systems, high traffic, scalable architecture, distributed systems,
fractional shares, investing platform, mobile investing app, App Store, Google Play,
white-label platform, API platform, unified API, developer tools, admin panel, dashboard,
microservices, microservice architecture, event-driven architecture, message queue, CQRS, event sourcing,
DevOps, CI/CD, cloud infrastructure, serverless, AWS, Docker, Kubernetes,
team leadership, team building, hiring, mentoring, agile, scrum, product development, startup, CTO as a service.
`

const fullTechText = `
Technical skills: TypeScript, JavaScript, Node.js, NestJS, Bun, Bun.js, Express, Koa, ElysiaJS, Fastify,
React, React.js, React Native, React Native developer, Next.js, NextJS, Vue.js,
Redux, Redux Toolkit, Redux Saga, state management,
PostgreSQL, MongoDB, Redis, RabbitMQ, Elasticsearch, OpenSearch,
GraphQL, Apollo, Apollo GraphQL, REST API, RESTful API, WebSocket, Socket.IO, Server-Sent Events,
Docker, Docker containers, Kubernetes, AWS, Amazon Web Services, AWS Pipelines,
Prisma, TypeORM, Sequelize, database design, database architecture, SQL, NoSQL, MySQL,
Grafana, Prometheus, monitoring, observability,
GitHub Actions, Jenkins, CI/CD, git, GitHub, GitLab, version control,
HTML5, CSS3, SCSS, Tailwind CSS, Styled Components,
Jest, testing, unit testing, integration testing,
Webpack, Vite, build tools, bundler,
PHP, Laravel, Symfony, Yii, Cocos, Unity, game engine,
Konva.js, canvas, HTML5 canvas, Web3, blockchain, smart contracts,
Node-RED, ESPHome, Home Assistant, IoT, smart home,
API design, API development, API integration,
system design, system architecture, technical architecture,
performance optimization, profiling, load testing.
`

const fullExperienceText = `
Work experience:
MUW App — CTO / Backend Developer at Finik.Pro (2020–present). Built the entire backend and mobile app from scratch
for a fractional-shares US-stock investing product, live on the App Store and Google Play.
Microservice architecture on Bun + NestJS + ElysiaJS with PostgreSQL/Supabase, Redis, PGMQ message bus.
Trading engine with broker integrations (Exante, Alpaca), live and historical quotes, order execution, FIFO P&L accounting.
White-label platform launching new countries in under a week, 100k+ clients per market.
Cut service cold start from 3–4 minutes to under 30 seconds.

eBazar — Co-Founder / Backend Developer (2024–2025). Built the whole backend and API from scratch:
order intake and formation, inventory and warehouse data, order lifecycle and real-time status tracking.
Logistics routing, geolocation-based pickup discovery.

UniversalAPI at Velory — Full-Stack Developer (2023–2025). Built entire developer/admin panel from scratch:
API key and access management, usage metrics, live request data.
Unique live data-remapping engine — drag-and-drop or code — supporting logical conditions and transforms.
Custom API Explorer, AI layer for machine-readable skill integration.

ELPASO at Finik.Pro — Lead / Fullstack Developer (2020–2023). UK fintech startup.
Convinced leadership to re-platform the failing product. Rebuilt backend and frontend from the ground up.
Hired and led a team of 4. Successfully acquired by another company for a strong exit.

Aurora Technologies — Backend Developer (2020). Video stream quality analysis system.
Single-handedly designed and shipped in two months (originally scoped for a year).
Metrics into Grafana, custom alerting scripts.

Clearmove — Senior Fullstack Developer (2019–2020). Global relocation platform.
Built product full-stack from scratch. Virtual cards, trip info, bookings.
Role-based panels for three user types. Mentored junior developer.

VistaCreate (Crello) — Frontend Team Lead (2017–2019). Led 5-engineer frontend team.
Shipped in-browser video editor with frame-accurate scrubbing for multi-GB footage.
Multi-page editing, design collections, PDFs.

RIDDEC Estonia (OlyBet, FoxSec, Bitsgap) — CTO (2017–2018).
Casino rules-management platform with visual logic editor.
Full one-man-band CTO across gaming, cybersecurity, crypto trading.

Siteplus at Dreamscape Networks — CTO (2015–2018). Website builder. Led team of 20.

GoITeens — Teacher of Web Development (2015–2016). Taught HTML5, CSS3, JavaScript.

Basic Group — Fullstack Developer (2014–2015). Multiple projects including web portals, assessment platforms.
PHP, Yii, Symphony, MySQL, Backbone, Socket.IO, jQuery.

IRST — Fullstack Developer (2013–2014). Multiple projects: medical services, tourism, web portals.

IT Launchpad — Fullstack Developer (2010–2013). Startup incubator. Multiple client projects.

Freelance — Fullstack Developer (2008–2010). Web development projects.
`

const fullEducationText = `
Education:
Master of Engineering in Engineer-mechanics, Designing and laser optical techniques
from National Technical University of Ukraine Kyiv Polytechnic Institute (2014–2016).

Bachelor's degree in Computer Science
from National Academy of Management (2014–2015).

Bachelor's degree in Engineer-mechanics, Institute of Mechanical Engineering
from National Technical University of Ukraine Kyiv Polytechnic Institute (2010–2014).

Certifications:
Certificate M101JS: MongoDB for Node.js Developers from MongoDB University (2017).
Successfully passed the test JavaScript from Geekbrains (2016).
Patent: The method of processing of materials by laser radiation (2015).

Languages: English B2 Upper-Intermediate, Ukrainian Native.
`

export const PdfHiddenText = () => (
  <div className={Styles.pdfOnly} aria-hidden="true">
    <p>{fullRoleText}</p>
    <p>{fullDomainText}</p>
    <p>{fullTechText}</p>
    <p>{fullExperienceText}</p>
    <p>{fullEducationText}</p>
  </div>
)
