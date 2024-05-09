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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  FIGMA,
  FIGJAM,
  CreateaiAI,
  DRAWIO,
  Spreadsheet,
  Survey,
  Doc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Product Design",
    icon: web,
  },
  {
    title: "UI/UX Instructor",
    icon: backend,
  },
  {
    title: "Micro Interaction",
    icon: mobile,
  },
  {
    title: "Strategic Planning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "FIGMA",
    icon: FIGMA,
  },
  {
    name: "FIGJAM",
    icon: FIGJAM,
  },
  {
    name: "CreateaiAI",
    icon: CreateaiAI,
  },
  {
    name: "DRAWIO",
    icon: DRAWIO,
  },
  {
    name: "Spreadsheet",
    icon: Spreadsheet,
  },
  {
    name: "Survey",
    icon: Survey,
  },
  {
    name: "Doc",
    icon: Doc,
  },
];

const experiences = [
  {
    title: "Senior UX UI designer",
    company_name: "AMK Microfinance (TONLESAP project)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2022 – Present",
    points: [
      "Transitioning TSA v1.0 to v2.0 for an Agri-tech ecosystem platform, including analysis, flow sitemap creation, new design system development, and ongoing testing.",
      "Planning and designing full functionality (8 features) for responsive web design based on the mobile app.",
      "Meticulously designing modals to enhance UX and prevent errors.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Optimizing the mobile app's ordering flow, reducing clicks, improving time constraints, and enhancing the design system.",
      "Implementing Market Product Price functionality to capture and compare agricultural prices.",
    ],
  },

  {
    title: "Marketing & Designer Executive",
    company_name: "Delicio.App",
    icon: tesla,
    iconBg: "#383E56",
    date: "Nov 2019 – Jun 2022",
    points: [
      "Planned, analyzed, designed, and monitored the team to deliver effective marketing strategies and design materials for aligning marketing campaigns.",
      "Compiled insights data into quantitative reports for monthly presentations to the CEO.",
      "Recently involved in designing seller/vendor mobile application, incorporating stakeholder feedback and adding new functions from the web dashboard to enhance user experience.",
      "Delivered and tested A/B with the first product prototype with stakeholders to gather early survey data on both quantitative and qualitative aspects.",
      "Tested the entire company's products (consumer, seller, and delivery app) to ensure minimal issues during production, reporting findings to the CEO and offshore team.",
    ],
  },
  {
    title: "Part-time UX/UI Instructor (at Futurebit)",
    company_name: "Startup institute",
    icon: shopify,
    iconBg: "#383E56",
    date: "2020-Present",
    points: [
      "Successfully completed the 3rd training course, focusing on responsive web design and basic mobile app design.",
      "Introduced basic design criteria, principles, and frameworks, followed by practical exercises on component and one-page UI design.",
      "Guided students through various project types, including meet doctor, event booking, fashion eCommerce, university discovery, and basic banking functions.",
      "Focused on essential sections such as color, typeface, grid system, breakpoints, prototypes, basic sitemap and flow, presentations, and assignments to ensure practical learning.",
    ],
  },
  {
    title: "UX UI Design Freelancer",
    company_name: "Self-employed",
    icon: shopify,
    iconBg: "#383E56",
    date: "2020-Present",
    points: [
      "Completed a discovery platform (Startup Ecosystem) focusing on mobile-first design and responsiveness in one month, involving early concept development from scratch with the client. By optimized search and company listing experiences to enhance user ease and speed of finding information.",
      "Completed a plant eCommerce website within one month, covering initial flow sitemap, documentation, and final design for 10 core features. Smooth design process facilitated by direct meetings and demos with the client and third-party collaborators.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const contactData = [
  {
    title: "Telegram",
    icon: mobile,
    href: "https://t.me/PhatMenghor",
  },
  {
    title: "Git Hub",
    icon: web,
    href: "https://github.com/Phatmenghor",
  },
  {
    title: "LinkIn",
    icon: creator,
    href: "https://www.linkedin.com/in/phat-menghor-124223276/",
  },
  {
    title: "Facebook",
    icon: backend,
    href: "https://web.facebook.com/profile.php?id=100089332688406",
  },
];

export { services, technologies, experiences, testimonials, projects };
