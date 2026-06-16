import {
  SiAmazonapigateway,
  SiAntdesign,
  SiApache,
  SiApollographql,
  SiBackbone,
  SiBem, SiCocos,
  SiCss3,
  SiCssmodules,
  SiDocker,
  SiElasticsearch,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGrafana,
  SiHtml5,
  SiJavascript,
  SiJfrogpipelines,
  SiJira,
  SiJquery,
  SiKoa,
  SiKonva,
  SiLinkedin,
  SiLodash,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNginx,
  SiNodered,
  SiOpensearch,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPrometheus,
  SiRabbitmq,
  SiReact,
  SiReactiveresume,
  SiRedis,
  SiRedux,
  SiReduxsaga,
  SiSocketdotio,
  SiSphinx,
  SiStyledcomponents,
  SiSwagger,
  SiSymphony,
  SiTimescale,
  SiTypeorm,
  SiTypescript,
  SiUnity,
  SiVitess,
  SiVuedotjs,
  SiWeb3Dotjs,
  SiWebpack,
  SiYii
} from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAws } from "react-icons/fa6";
import microservice from "./assets/microservice.png";
import { IoMailOutline } from "react-icons/io5";

export const resumeInfo = {
  "name": "Ihor Haiduk",
  "label": "Developer",
  "email": "cookkycok@gmail.com",
  "phone": "",
  "summary": "Technical leader and senior fullstack engineer with 15+ years of experience building products end-to-end — from architecture and team hiring to shipping to production. I have worked as CTO, Tech Lead and Co-Founder across fintech, stock trading, gaming and SaaS. I design scalable microservice systems on Node.js, NestJS and Bun, build React and React Native frontends, recruit and lead engineering teams, and turn business goals into reliable, maintainable platforms. Hands-on with high-load architecture, real-time data, payment and broker integrations, and visual rule/logic engines.",

  "profiles": [
    {
      "network": "Email: cookkycok@gmail.com",
      "url": "mailto:cookkycok@gmail.com",
      "Icon": IoMailOutline,
    },
    // {
    //   "network": "Phone: +",
    //   "url": "tel:+",
    //   "Icon": MdPhoneIphone,
    // },
    {
      "network": "LinkedIn Profile",
      "url": "https://www.linkedin.com/in/iHaiduk/",
      Icon: SiLinkedin,
    },
    {
      "network": "GitHub Profile",
      "url": "https://github.com/iHaiduk",
      Icon: SiGithub,
    },
  ],

  "skills": [
    {
      "name": "Core",
      "list": [
        {
          "name": "JavaScript",
          "Icon": SiJavascript,
        },
        {
          "name": "TypeScript",
          "Icon": SiTypescript,
        },
        {
          "name": "NodeJS",
          "Icon": GrNode,
        },
        {
          "name": "BunJS",
          "link": "https://bun.sh/wordmark.svg",
        },
        {
          "name": "Microservice",
          "link": microservice,
        },
      ]
    },
    {
      "name": "Backend",
      "list": [
        {
          "name": "NestJS",
          "Icon": SiNestjs,
        },
        {
          "name": "NextJS",
          "Icon": TbBrandNextjs,
        },
        {
          "name": "ElysiaJS",
          "link": "https://elysiajs.com/assets/elysia.svg",
        },
        {
          "name": "NodeRed",
          "Icon": SiNodered,
        },
        {
          "name": "Cocos",
          "Icon": SiCocos,
        },
      ]
    },
    {
      "name": "Frontend",
      "list": [
        {
          "name": "React",
          "Icon": SiReact,
        },
        {
          "name": "React Native",
          "Icon": SiReact,
        },
        {
          "name": "Vite",
          "Icon": SiVitess,
        },
        {
          "name": "Expo",
          "Icon": SiExpo,
        },
        {
          "name": "Styled",
          "Icon": SiStyledcomponents,
        },
      ]
    },
    {
      "name": "DB",
      "list": [
        {
          "name": "MongoDB",
          "Icon": SiMongodb,
        },
        {
          "name": "PostgreSQL",
          "Icon": SiPostgresql,
        },
        {
          "name": "Firebase",
          "Icon": SiFirebase,
        },
        {
          "name": "Redis",
          "Icon": SiRedis,
        },
        {
          "name": "RabbitMQ",
          "Icon": SiRabbitmq,
        },
      ]
    },
    {
      "name": "Utils",
      "list": [
        {
          "name": "Apollo",
          "Icon": SiApollographql,
        },
        {
          "name": "RxJS",
          "Icon": SiReactiveresume,
        },
        {
          "name": "TypeORM",
          "Icon": SiTypeorm,
        },
        {
          "name": "Prisma",
          "Icon": SiPrisma,
        },
        {
          "name": "Lodash",
          "Icon": SiLodash,
        },
      ]
    },
    {
      "name": "Other",
      "list": [
        {
          "name": "Docker",
          "Icon": SiDocker,
        },
        {
          "name": "AWS",
          "Icon": FaAws,
        },
        {
          "name": "GitHub",
          "Icon": SiGithub,
        },
        {
          "name": "Web3",
          "Icon": SiWeb3Dotjs,
        },
        {
          "name": "Unity",
          "Icon": SiUnity,
        },
      ]
    },
  ],
  "projects": [
    {
      "isActive": true,
      "name": "MUW App",
      "link": "https://www.muw.app/",
      "start": new Date("2022-01-01"),
      "company": "Finik.Pro",
      "companyLink": "https://finik.pro/",
      "position": "CTO / Backend Developer",
      "team": "7",
      "role": "CTO at Finik.Pro since 2020 and hands-on backend lead. Built the backend and the mobile app from scratch and lead a cross-functional team of 7 (frontend, backend, mobile).",
      "achievements": [
        "Built the entire backend and mobile app from scratch for a fractional-shares US-stock investing product, live on the App Store and Google Play.",
        "Designed a microservice architecture on Bun + NestJS + ElysiaJS with PostgreSQL/Supabase, Redis, PGMQ message bus, Supabase Realtime (CDC/WebSocket) and the Transactional Outbox pattern.",
        "Built the trading engine: broker integrations (Exante, Alpaca), live and historical quotes, order execution and FIFO P&L accounting.",
        "Cut service cold start from 3–4 minutes to under 30 seconds by profiling and removing the si.diskLayout() bottleneck.",
        "Turned the product into a white-label platform that launches a new country/brand in under a week — 100k+ clients per market.",
      ],
      "description": "MUW.app is an innovative investment mobile application that enables users to invest in leading U.S. company stocks with minimal capital. The app offers fractional share purchases and an intuitive, user-friendly interface. The application is available for download on both the App Store and Google Play.",
      "skills": [
        {
          "name": "TypeScript",
          "Icon": SiTypescript,
        },
        {
          "name": "React",
          "Icon": SiReact,
        },
        {
          "name": "Firebase",
          "Icon": SiFirebase,
        },
        {
          "name": "Styled",
          "Icon": SiStyledcomponents,
        },
        {
          "name": "Microservice",
          "link": microservice,
        },
        {
          "name": "BunJS",
          "link": "https://bun.sh/wordmark.svg",
        },
        {
          "name": "NestJS",
          "Icon": SiNestjs,
        },
        {
          "name": "RxJS",
          "Icon": SiReactiveresume,
        },
        {
          "name": "TypeORM",
          "Icon": SiTypeorm,
        },
        {
          "name": "Timescale",
          "Icon": SiTimescale,
        },
        {
          "name": "Opensearch",
          "Icon": SiOpensearch,
        },
        {
          "name": "Redis",
          "Icon": SiRedis,
        },
        {
          "name": "RabbitMQ",
          "Icon": SiRabbitmq,
        },
        {
          "name": "GitHub",
          "Icon": SiGithub,
        },
        {
          "name": "AWS",
          "Icon": FaAws,
        },
        {
          "name": "AWS Pipelines",
          "Icon": SiJfrogpipelines,
        },
        {
          "name": "Docker",
          "Icon": SiDocker,
        },
        {
          "name": "Swagger",
          "Icon": SiSwagger,
        },
      ]
    },
    {
      "isActive": true,
      "name": "eBazar",
      "link": "https://e-bazar.ua/",
      "start": new Date("2024-06-01"),
      "end": new Date("2025-10-01"),
      "company": "eBazar",
      "companyLink": "https://e-bazar.ua/",
      "position": "Co-Founder / Backend Developer",
      "team": "6",
      "role": "Equal-share co-founder; owned the entire backend of a neighbourhood grocery marketplace (direct farm/store → residential complex, at cost, no delivery fee).",
      "achievements": [
        "Built the whole backend and API from scratch: order intake and formation, inventory and warehouse data, order lifecycle and real-time status tracking.",
        "Designed logistics routing — shortest-path delivery across multiple residential complexes to minimise fuel cost and delivery time.",
        "Implemented geolocation-based pickup discovery so buyers find the nearest sales/pickup points on their route.",
        "Co-founded the product as an equal-share partner and drove all backend architecture decisions.",
      ],
      "description": "e-bazar.ua is a Ukrainian platform for posting free classified ads, allowing users to buy and sell goods or services directly without intermediaries or fees. The platform offers a convenient categorization of ads by sections and subsections, making it easy to find desired items. Users can post ads for free and even open their own virtual stores to boost sales.",
      "skills": [
        {
          "name": "TypeScript",
          "Icon": SiTypescript,
        },
        {
          "name": "React",
          "Icon": SiReact,
        },
        {
          "name": "NodeJS",
          "Icon": GrNode,
        },
        {
          "name": "NestJS",
          "Icon": SiNestjs,
        },
        {
          "name": "RxJS",
          "Icon": SiReactiveresume,
        },
        {
          "name": "MongoDB",
          "Icon": SiMongodb,
        },
        {
          "name": "Prisma",
          "Icon": SiPrisma,
        },
        {
          "name": "Docker",
          "Icon": SiDocker,
        },
      ]
    },
    {
      "isActive": true,
      "name": "Universal API",
      "link": "https://www.universalapi.io/",
      "start": new Date("2023-05-22"),
      "end": new Date("2025-06-01"),
      "company": "Velory",
      "companyLink": "https://velory.com/",
      "position": "Full-Stack Developer",
      "team": "5",
      "role": "Owned the full frontend and the product backend (APIs, billing) on a 2-engineer core, while a second engineer handled third-party service integrations.",
      "achievements": [
        "Built the entire developer/admin panel from scratch: API key and access management, usage metrics and live request data.",
        "Designed a unique live data-remapping engine — drag-and-drop or code — supporting logical conditions and transforms (fields → objects/arrays, conditional outputs), compiled and executed on the backend.",
        "Built a custom API Explorer from scratch: switch environments, consumers and identifiers on the fly, with auto-filled, dynamically generated requests and live responses.",
        "Added an AI layer exposing a machine-readable skill so external AIs can understand and integrate the API automatically.",
        "Owned the backend: APIs, payment-system integration, tariffs and billing, over-limit calculations, and full frontend ↔ backend integration.",
      ],
      "description": "UniversalAPI is a unified API solution for developers, enabling seamless integration with multiple platforms and services. It simplifies development by standardizing interactions across systems, reducing the need for platform-specific code. Ideal for developers building cross-platform applications.",
      "skills": [
        {
          "name": "TypeScript",
          "Icon": SiTypescript,
        },
        {
          "name": "React",
          "Icon": SiReact,
        },

        {
          "name": "Microservice",
          "link": microservice,
        },
        {
          "name": "NodeJS",
          "Icon": GrNode,
        },
        {
          "name": "Vite",
          "Icon": SiVitess,
        },
        {
          "name": "AntDesign",
          "Icon": SiAntdesign,
        },
        {
          "name": "Express",
          "Icon": SiExpress,
        },
        {
          "name": "MongoDB",
          "Icon": SiMongodb,
        },
        {
          "name": "TypeORM",
          "Icon": SiTypeorm,
        },
      ]
    },
    {
      "isActive": true,
      "name": "ELPASO",
      "link": "http://elpaso.co.uk/",
      "start": new Date("2020-09-01"),
      "end": new Date("2023-01-01"),
      "company": "ELPASO / Finik.Pro",
      "companyLink": "https://finik.pro/",
      "position": "Lead / Fullstack Developer",
      "team": "4",
      "role": "Joined a struggling fintech product, made the case to fully re-platform it, then led the rebuild end-to-end — business analysis, architecture, hiring and hands-on development.",
      "achievements": [
        "Convinced leadership to re-platform the failing product, set the roadmap and timelines, and earned full ownership of the technical direction.",
        "Rebuilt the backend and frontend from the ground up, selected the stack and ran product/business analysis.",
        "Hired and led a team of 4; owned all technology and architecture decisions.",
        "Result: the rebuilt platform launched successfully and was acquired by another company for a strong exit.",
      ],
      "description": "ELPASO is a UK-based fintech startup offering financial services tailored for entrepreneurs and businesses, including clients from Ukraine. Founded in 2017, the company focuses on simplifying access to international banking services, particularly for businesses operating in Europe, Asia, and North America.",
      "skills": [
        {
          "name": "TypeScript",
          "Icon": SiTypescript,
        },
        {
          "name": "React",
          "Icon": SiReact,
        },
        {
          "name": "Apollo",
          "Icon": SiApollographql,
        },
        {
          "name": "Microservice",
          "link": microservice,
        },
        {
          "name": "NestJS",
          "Icon": SiNestjs,
        },
        {
          "name": "RxJS",
          "Icon": SiReactiveresume,
        },
        {
          "name": "Styled",
          "Icon": SiStyledcomponents,
        },
        {
          "name": "TypeORM",
          "Icon": SiTypeorm,
        },
        {
          "name": "Opensearch",
          "Icon": SiOpensearch,
        },
        {
          "name": "Redis",
          "Icon": SiRedis,
        },
        {
          "name": "Docker",
          "Icon": SiDocker,
        },
      ]
    },
    {
      "isActive": true,
      "name": "Aurora",
      "link": "https://auroratechsllc.com/",
      "start": new Date("2020-06-01"),
      "end": new Date("2020-09-01"),
      "company": "Aurora Technologies",
      "companyLink": "https://auroratechsllc.com/",
      "position": "Backend Developer",
      "team": "30+",
      "role": "Sole engineer on a video-stream quality-analysis project — designed and built the backend, data panel and alerting end-to-end.",
      "achievements": [
        "Single-handedly designed and shipped a video-stream quality-analysis system — originally scoped for a year, delivered solo in two months.",
        "Built the backend and a data-collection panel that gather and analyse streaming metrics between broadcaster and receiver to pinpoint exactly where quality loss, drops and degradation occur.",
        "Piped metrics into Grafana and wrote custom scripts for analysis, alerting and visualisation — automatically warning when a video stream became unstable.",
      ],
      "description": "Ukrainian company specializing in innovative technology development and digital solutions for businesses. Its core activities include software development, web design, IT management, cybersecurity, consulting, and system integration, such as NetSuite.",
      "skills": [
        {
          "name": "TypeScript",
          "Icon": SiTypescript,
        },
        {
          "name": "NodeJS",
          "Icon": GrNode,
        },
        {
          "name": "Grafana",
          "Icon": SiGrafana,
        },
        {
          "name": "Prometheus",
          "Icon": SiPrometheus,
        },
        {
          "name": "Redis",
          "Icon": SiRedis,
        },
        {
          "name": "Express",
          "Icon": SiExpress,
        },
        {
          "name": "VueJS",
          "Icon": SiVuedotjs,
        },
        {
          "name": "REST API",
          "Icon": SiAmazonapigateway,
        },
      ]
    },
    {
      "isActive": true,
      "name": "Clearmove",
      "link": "https://clearmove.com/",
      "start": new Date("2019-10-01"),
      "end": new Date("2020-05-15"),
      "company": "Clearmove",
      "companyLink": "https://www.facebook.com/ClearmoveGlobal",
      "position": "Senior Fullstack Developer",
      "team": "10",
      "role": "Senior full-stack engineer and mentor on a global relocation platform — built the mobile app and web in parallel, owned the backend, and grew a junior developer.",
      "achievements": [
        "Built the product full-stack from scratch — chose the technologies, libraries and architecture at the very start and implemented the relocation app together with its web panels.",
        "Owned the backend and data preparation, and delivered the user-facing app: virtual cards, trip info, tickets and bookings (taxi, trains, flights and more) for a smooth relocation.",
        "Built role-based panels for three user types — user, manager and admin — covering data-entry forms, status/process tracking, and request management across every relocation stage.",
        "Acted as the senior on the team: mentored, taught and grew a junior developer.",
      ],
      "description": "ClearMove is a platform for managing global employee mobility, simplifying relocations, travel, and assignments. It automates tasks, tracks expenses, ensures compliance, and helps companies reduce costs while improving transparency and employee experience.",
      "skills": [
        {
          "name": "TypeScript",
          "Icon": SiTypescript,
        },
        {
          "name": "React",
          "Icon": SiReact,
        },
        {
          "name": "React Native",
          "Icon": SiReact,
        },
        {
          "name": "Apollo",
          "Icon": SiApollographql,
        },
        {
          "name": "RxJS",
          "Icon": SiReactiveresume,
        },
        {
          "name": "NodeJS",
          "Icon": GrNode,
        },
        {
          "name": "NestJS",
          "Icon": SiNestjs,
        },
        {
          "name": "PostgreSQL",
          "Icon": SiPostgresql,
        },
      ]
    },
    {
      "isActive": true,
      "name": "VistaCreate (old Crello)",
      "link": "https://create.vista.com/",
      "start": new Date("2017-11-01"),
      "end": new Date("2019-10-01"),
      "company": "Crello",
      "companyLink": "https://crello.com/",
      "position": "Frontend Team Lead",
      "team": "30",
      "role": "Frontend Team Lead of a 5-engineer team building an in-browser visual design editor; coordinated work across other teams and their leads.",
      "achievements": [
        "Led a hand-picked 5-engineer frontend team and managed task distribution across neighbouring teams and their team leads.",
        "Shipped an in-browser video editor — upload and edit video to produce animated digital presentations, running fully client-side with no server upload of multi-GB files.",
        "Built frame-accurate video scrubbing with real-time preview for heavy, multi-gigabyte footage.",
        "Delivered multi-page editing — design collections, PDFs and multi-page sets rendered in real time.",
      ],
      "description": "Create by Vista is an online design platform for creating professional visuals like social media posts, banners, and presentations. It offers customizable templates and tools, making it easy for anyone to design eye-catching content quickly.",
      "skills": [
        {
          "name": "TypeScript",
          "Icon": SiTypescript,
        },
        {
          "name": "React",
          "Icon": SiReact,
        },
        {
          "name": "Redux",
          "Icon": SiRedux,
        },
        {
          "name": "Redux Saga",
          "Icon": SiReduxsaga,
        },
        {
          "name": "KonvaJS",
          "Icon": SiKonva,
        },
        {
          "name": "SCSS",
          "Icon": SiCssmodules,
        },
        {
          "name": "NodeJS",
          "Icon": GrNode,
        },
        {
          "name": "Koa",
          "Icon": SiKoa,
        },
        {
          "name": "PostgreSQL",
          "Icon": SiPostgresql,
        },
        {
          "name": "Redis",
          "Icon": SiRedis,
        },
      ]
    },
    {
      "isActive": true,
      "name": "OlyBet · FoxSec · Bitsgap",
      "link": "https://www.olybet.ee/",
      "start": new Date("2017-03-01"),
      "end": new Date("2018-05-01"),
      "company": "RIDDEC ESTONIA",
      "companyLink": "https://riddec.com/",
      "position": "CTO",
      "team": "5",
      "role": "Full one-man-band CTO across several products (gaming/casino, cybersecurity, crypto trading) — backend, frontend, DevOps, management and client communication, everything except design.",
      "achievements": [
        "Built a casino rules-management platform where admins configure conditions, bonuses and payouts through a visual rule editor.",
        "Designed a visual logic/programming engine for rules with full conditional logic (simultaneous, exclusive and either-or events) and live, faker-generated examples showing in real time whether a given client passes.",
        "Made the rule system fully dynamic — derived from the database schema and table relationships — so new backend tables or data required no changes to the frontend.",
        "Delivered backend, frontend, DevOps and delivery across OlyBet, FoxSec and Bitsgap as the single technical owner.",
      ],
      "description": "OlyBet is an online gaming and betting platform offering sports betting, casino games, poker, and live entertainment. Available in Estonia and other regions, it provides a wide range of betting options, competitive odds, and interactive features for an engaging user experience.",
      "skills": [
        {
          "name": "TypeScript",
          "Icon": SiTypescript,
        },
        {
          "name": "React",
          "Icon": SiReact,
        },
        {
          "name": "Redux",
          "Icon": SiRedux,
        },
        {
          "name": "SCSS",
          "Icon": SiCssmodules,
        },
        {
          "name": "Bem",
          "Icon": SiBem,
        },
        {
          "name": "NodeJS",
          "Icon": GrNode,
        },
        {
          "name": "Koa",
          "Icon": SiKoa,
        },
        {
          "name": "MongoDB",
          "Icon": SiMongodb,
        },
        {
          "name": "Elasticsearch",
          "Icon": SiElasticsearch,
        },
        {
          "name": "Webpack",
          "Icon": SiWebpack,
        },
        {
          "name": "Jira",
          "Icon": SiJira,
        },
      ]
    },
    {
      "isActive": true,
      "name": "Siteplus",
      "link": "https://siteplus.com/",
      "start": new Date("2015-03-01"),
      "end": new Date("2018-05-01"),
      "company": "Dreamscape Networks",
      "companyLink": "https://www.dreamscapenetworks.com/",
      "position": "CTO",
      "team": "20",
      "description": "SitePlus is a user-friendly website builder designed to help individuals and businesses create professional websites quickly and easily",
      "skills": [
        {
          "name": "TypeScript",
          "Icon": SiTypescript,
        },
        {
          "name": "React",
          "Icon": SiReact,
        },
        {
          "name": "Redux",
          "Icon": SiRedux,
        },
        {
          "name": "SCSS",
          "Icon": SiCssmodules,
        },
        {
          "name": "Bem",
          "Icon": SiBem,
        },
        {
          "name": "NodeJS",
          "Icon": GrNode,
        },
        {
          "name": "Koa",
          "Icon": SiKoa,
        },
        {
          "name": "MongoDB",
          "Icon": SiMongodb,
        },
        {
          "name": "Elasticsearch",
          "Icon": SiElasticsearch,
        },
        {
          "name": "Webpack",
          "Icon": SiWebpack,
        },
        {
          "name": "Jira",
          "Icon": SiJira,
        },
      ]
    },
    {
      "isActive": true,
      "name": "Teacher of Web Development",
      "start": new Date("2015-09-01"),
      "end": new Date("2016-01-01"),
      "company": "GolTeens",
      "companyLink": "https://goiteens.com/",
      "position": "Teacher",
      "team": "10",
      "description": "GoITeens is an educational platform designed to help children and teenagers acquire modern IT skills, such as programming, design, robotics, and other digital technologies.",
      "skills": [
        {
          "name": "HTML 5",
          "Icon": SiHtml5,
        },
        {
          "name": "CSS 3",
          "Icon": SiCss3,
        },
        {
          "name": "JavaScript",
          "Icon": SiJavascript,
        },
      ]
    },
    {
      "isActive": true,
      "name": "Basic Group, Chandelier assessment, Scientia, eMap Web-portal of Taras Shevchenko, eWebinar, eCast",
      "start": new Date("2014-01-01"),
      "end": new Date("2015-04-01"),
      "company": "Basic Group",
      "companyLink": "https://www.facebook.com/basicgroup.ua",
      "position": "Fullstack Developer",
      "team": "10",
      "description": "Basic Group is one of the leading Ukrainian IT companies, specializing in the development of comprehensive IT solutions and providing high-quality services in the field of information technology.",
      "skills": [
        {
          "name": "HTML 5",
          "Icon": SiHtml5,
        },
        {
          "name": "CSS 3",
          "Icon": SiCss3,
        },
        {
          "name": "JavaScript",
          "Icon": SiJavascript,
        },
        {
          "name": "jQuery",
          "Icon": SiJquery,
        },
        {
          "name": "Backbone",
          "Icon": SiBackbone,
        },
        {
          "name": "Socket.IO",
          "Icon": SiSocketdotio,
        },
        {
          "name": "PHP",
          "Icon": SiPhp,
        },
        {
          "name": "Yii Framework",
          "Icon": SiYii,
        },
        {
          "name": "Symphony Framework",
          "Icon": SiSymphony,
        },
        {
          "name": "MySQL",
          "Icon": SiMysql,
        },
        {
          "name": "Sphinx",
          "Icon": SiSphinx,
        },
        {
          "name": "Apache",
          "Icon": SiApache,
        },
        {
          "name": "Nginx",
          "Icon": SiNginx,
        },
      ]
    },
    {
      "isActive": true,
      "name": "Ski Gagarin, IRST MedicalService, AURA, IRST EasyTour",
      "start": new Date("2013-04-01"),
      "end": new Date("2014-01-01"),
      "company": "IRST",
      "companyLink": "https://www.linkedin.com/company/irst-ukraine",
      "position": "Fullstack Developer",
      "team": "15",
      "description": "IRST Ukraine is a company specializing in the development of comprehensive IT solutions tailored for modern businesses across various industries. Our team of professionals is dedicated to delivering high-quality, reliable products aimed at maximizing our clients' business efficiency. Through a collaborative and creative partnership with our clients, we achieve exceptional results.",
      "skills": [
        {
          "name": "HTML 5",
          "Icon": SiHtml5,
        },
        {
          "name": "CSS 3",
          "Icon": SiCss3,
        },
        {
          "name": "JavaScript",
          "Icon": SiJavascript,
        },
        {
          "name": "jQuery",
          "Icon": SiJquery,
        },
        {
          "name": "Backbone",
          "Icon": SiBackbone,
        },
        {
          "name": "Socket.IO",
          "Icon": SiSocketdotio,
        },
        {
          "name": "PHP",
          "Icon": SiPhp,
        },
        {
          "name": "MySQL",
          "Icon": SiMysql,
        },
        {
          "name": "Apache",
          "Icon": SiApache,
        },
      ]
    },
    {
      "isActive": true,
      "name": "Simplinar, Ramirent, DevChallenge(UWC), Piligrim-M, Compex, RadugaStock, RadugaImages",
      "start": new Date("2010-05-01"),
      "end": new Date("2013-04-01"),
      "company": "IT Lounchpad",
      "companyLink": "https://www.linkedin.com/company/it-launchpad",
      "position": "Fullstack Developer",
      "team": "3",
      "description": "Business Incubator IT Launchpad provides full financial, managerial and mentor support for qualifying startups from Ukraine at early stages. We are currently accepting new project applications. Please visit our website for more information and application forms. ",
      "skills": [
        {
          "name": "HTML 5",
          "Icon": SiHtml5,
        },
        {
          "name": "CSS 3",
          "Icon": SiCss3,
        },
        {
          "name": "JavaScript",
          "Icon": SiJavascript,
        },
        {
          "name": "jQuery",
          "Icon": SiJquery,
        },
        {
          "name": "Backbone",
          "Icon": SiBackbone,
        },
        {
          "name": "Socket.IO",
          "Icon": SiSocketdotio,
        },
        {
          "name": "PHP",
          "Icon": SiPhp,
        },
        {
          "name": "MySQL",
          "Icon": SiMysql,
        },
        {
          "name": "Apache",
          "Icon": SiApache,
        },
      ]
    },
    {
      "isActive": true,
      "name": "Biomax, Artes, Branson, Questorio",
      "start": new Date("2008-05-01"),
      "end": new Date("2010-05-01"),
      "company": "Freelance",
      "companyLink": "https://www.linkedin.com/in/ihaiduk/",
      "position": "",
      "team": "1",
      "description": "Freelance. ",
      "skills": [
        {
          "name": "HTML 5",
          "Icon": SiHtml5,
        },
        {
          "name": "CSS 3",
          "Icon": SiCss3,
        },
        {
          "name": "JavaScript",
          "Icon": SiJavascript,
        },
        {
          "name": "jQuery",
          "Icon": SiJquery,
        },
        {
          "name": "PHP",
          "Icon": SiPhp,
        },
        {
          "name": "MySQL",
          "Icon": SiMysql,
        },
        {
          "name": "Apache",
          "Icon": SiApache,
        },
      ]
    },
  ],

  "education": [
    {
      "isActive": true,
      "start": new Date("2014-09-01"),
      "end": new Date("2016-09-01"),
      "position": "Master of Engineering",
      "education": "Engineer-mechanics, Designing and laser optical techniques",
      "place": "National Technical University of Ukraine 'Kyiv Polytechnic Institute'",
      "link": "https://kpi.ua/en"
    },
    {
      "isActive": true,
      "start": new Date("2014-09-01"),
      "end": new Date("2015-09-01"),
      "position": "Bachelor's degree",
      "education": "Computer Science",
      "place": "National Academy of Management ",
      "link": "https://nam.kyiv.ua/en"
    },
    {
      "isActive": true,
      "start": new Date("2010-09-01"),
      "end": new Date("2014-09-01"),
      "position": "Bachelor's degree",
      "education": "Engineer-mechanics, Institute of Mechanical Engineering",
      "place": "National Technical University of Ukraine 'Kyiv Polytechnic Institute'",
      "link": "https://kpi.ua/en"
    },
  ],

  "licenses": [
    {
      "isActive": true,
      "date": new Date("2017-12-12"),
      "name": "Certificate M101JS: MongoDB for Node.js Developers (MongoDB University)",
      "link": "https://university.mongodb.com/course_completion/98fec258-286a-43e6-988d-cb67b4ca",
    },
    {
      "isActive": true,
      "date": new Date("2016-10-15"),
      "name": "Successfully passed the test JavaScript (Geekbrains)",
      "link": "https://gb.ru/certificates/121247",
    },
    {
      "isActive": true,
      "date": new Date("2015-12-10"),
      "name": "The method of processing of materials by laser radiation",
      "link": "https://ua.patents.su/5-103184-sposib-obrobki-materialiv-lazernim-viprominyuvannyam.html",
    },
  ],
  "hobbies": [
    {
      "isActive": true,
      "start": new Date("2024-06-01"),
      "position": "ESPHome",
      "positionLink": "https://esphome.io/",
      "name": "Programming ESP32 microcontrollers",
      "place": "Interested in developing and programming ESP32 microcontrollers to create standalone devices and integrate them into smart ecosystems.",
    },
    {
      "isActive": true,
      "start": new Date("2019-01-01"),
      "position": "Node-RED",
      "positionLink": "https://nodered.org/",
      "name": "Developing NodeRed extensions for controlling ESPHome devices",
      "place": "Passionate about creating custom solutions for automation and device integration through NodeRed, enhancing functionality and ease of managing smart systems.",
    },
    {
      "isActive": true,
      "start": new Date("2017-01-01"),
      "position": "Home Assistant",
      "positionLink": "https://www.home-assistant.io/",
      "name": "Building smart homes based on Home Assistant",
      "place": "Enthusiastic about designing and configuring smart homes using the Home Assistant platform, including device integration and creating complex automation scenarios.",
    },
    {
      "isActive": true,
      "start": new Date("2022-07-01"),
      "position": "Autodesk Fusion",
      "positionLink": "https://www.autodesk.com/products/fusion-360/",
      "name": "3D modeling and 3D printing",
      "place": "Passionate about creating 3D models and bringing them to life through 3D printing, enabling the development of unique parts and prototypes for personal and technical projects.",
    },
    {
      "isActive": true,
      "start": new Date("2014-01-01"),
      "end": new Date("2015-06-01"),
      "position": "Unity",
      "positionLink": "https://unity.com/",
      "name": "Game development with Unity",
      "place": "Gained experience in developing games using Unity, working on both 2D and 3D projects, and learning about game physics, scripting, and asset integration.",
    },
  ]
}
