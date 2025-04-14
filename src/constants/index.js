import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Technical Project Manager",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Business Intelligence",
    icon: backend,
  },
  {
    title: "Quantitative Forecasting",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Technical Project Manager (Business Intelligence)",
    company_name: "CoreCentrica LLC",
    company_website: "https://www.corecentrica.com/",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Managed multiple concurrent projects valued over $10,000+, overseeing project planning, execution, and delivery while ensuring alignment with business objectives and regulatory standards.",
      "Led cross-functional teams across IT, finance, and operations, improving workflow efficiency by 25% through automation and process optimization.",
      "Implemented risk assessment strategies to identify and mitigate project risks, reducing delays by 30%.",
      "Developed and maintained project dashboards and reporting tools using Power BI and Excel, providing leadership with real-time insights.",
      "Managed stakeholder communication, ensuring clear requirement documentation, project forecasting, and budget management.",
    ],
  },
  {
    title: "Data Engineer Intern",
    company_name: "Site Service Software Inc.",
    company_website: "https://www.siteservicesoftware.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "June 2023 - September 2023",
    points: [
      "Implemented data pipelines in Snowflake to integrate multiple healthcare data sources, improving data processing efficiency by 35%.",
      "Developed SQL-based data models for membership lifecycle tracking, enhancing reporting accuracy for business stakeholders.",
      "Assisted in resolving production support issues, reducing response time by 25% through proactive monitoring and automation.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Marketeq Digital",
    company_website: "https://www.marketeqdigital.com/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "October 2022 - December 2022",
    points: [
      "Designed predictive analytics dashboards in Power BI, increasing forecasting accuracy for marketing trends by 18%.",
      "Automated data collection and cleansing processes using Python, reducing data wrangling time by 50%.",
      "Conducted customer behavior analysis using SQL queries, providing insights that led to a 12% increase in customer retention.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Crmnext",
    company_website: "https://www.businessnext.com/crm",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Jan 2024",
    points: [
      "Developed Flow and Layout Designers for HDFC, PNB, IOB, and Utkarsh Bank.",
      "Boosted team efficiency by 50% by implementing monorepo architecture and reusable Design-System.",
      "Integrated GenAI models to automate flow creation from user prompts, eliminating manual configuration efforts.",
      "Integrated unit testing with 80% code coverage, enhancing code reliability and reducing bugs.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Nickelfox Technologies",
    company_website: "https://www.nickelfox.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Nov 2023",
    points: [
      "Developing and maintaining web and mobile applications using React.js, React-native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Newgen Software",
    company_website: "https://newgensoft.com/home-india/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Dec 2021",
    points: [
      "Developed a groundbreaking banking product for a Singapore-based firm, improved transaction management.",
      "Developed a dynamic dashboard for efficient transaction management, resulting in a 30% increase in productivity.",
      "Optimized frontend performance by achieving 20% reduction in page loading time and make it responsive.",
      "Created a transaction report generator, reducing report generation time by 50% and enhancing data analysis.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Skillrisers",
    company_website: "https://www.skillrisers.com/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Jul 2020",
    points: [
      "Contributed to the development of a Test Engine Application, empowering users to create and conduct tests seamlessly.",
      "Built three essential modules: Teacher, Student, and Admin, ensuring comprehensive functionality for all user roles.",
      "Collaborated effectively with the development team, actively participating in code reviews and resolving technical challenges.",
      "Demonstrated strong problem-solving skills, consistently delivering high-quality code and meeting project deadlines.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    company_website: "https://proximus.surge.sh/index.html",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Jan 2021",
    points: [
      "Spearheaded the development of a fully responsive website for the college coding society.",
      "Led coding sessions, actively sharing knowledge and insights to enrich members' programming skills and understanding.",
      "Organized informative sessions on cutting-edge technologies, including JavaScript and ReactJs.",
      "Curated and designed challenging coding problems for college competitions.",
    ],
  },
];

const projects = [
  {
    name: "Aptihealth Web",
    description:
      "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://www.aptihealth.com/",
  },
  {
    name: "Aptihealth App",
    description:
      "Access top-notch mental healthcare anytime, anywhere in New York State with our innovative app. Track your progress, schedule appointments, and connect with expert therapists for personalized care.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendbird",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "Zeal Web",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
  {
    name: "Zeal App",
    description:
      "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendgrid",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  },
  {
    name: "Roll Web",
    description:
      "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://app.tryroll.com/",
  },
  {
    name: "Roll App",
    description:
      "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
    tags: [
      {
        name: "react-native-web",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "storybook",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },
];

const personalInfo = {
  name: "Vai",
  fullName: "Vaibhav Vesmaker",
  email: "vaibhav.vesmaker@rutgers.edu",
  role: "Technical Project Manager & Data Geek",
  about: `I am a versatile professional with expertise in project management, data analytics, and business intelligence. With a strong foundation in Agile methodologies, stakeholder management, and data-driven decision-making, I excel at bridging the gap between technical and business teams. My experience spans leading cross-functional teams, automating workflows, and delivering actionable insights through advanced data visualization and reporting tools like Power BI, Tableau, and SQL. Whether it's optimizing processes, managing complex projects, or analyzing data to drive strategic decisions, I bring a results-oriented approach to every challenge.`,
  projectsIntro: `The following projects showcase my ability to manage complex projects, analyze data, and deliver innovative solutions. Each project reflects my expertise in leveraging technology to solve real-world problems, streamline workflows, and enhance business outcomes.`,

};

const publicUrls = {
  resume:
    "https://github.com/vaibhavvesmaker",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/vaibhav-vesmaker-5368841b6/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/vaibhavvesmaker",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
