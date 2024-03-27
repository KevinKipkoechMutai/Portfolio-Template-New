import {
  frontend, sociopedia, finalytics,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  farmleaf,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  compsanalytics,
  mulasafi,
  moringa,
  kvm,
  temec,
  sarabistudio,
  earthhero
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Junior Software Developer',
    company_name: 'Tea Engineering and Machinery Company',
    icon: temec,
    iconBg: '#333333',
    date: 'Jan 2018 - Dec 2018',
  },
  {
    title: 'Junior Software Developer',
    company_name: 'Kenya Vehicle Manufacturers',
    icon: kvm,
    iconBg: '#333333',
    date: 'Jan 2019 - Dec 2019',
  },
  {
    title: 'Software Engineering Trainee',
    company_name: 'Moringa School',
    icon: moringa,
    iconBg: '#333333',
    date: 'Jun 2022 - Dec 2022',
  },
  {
    title: 'Full Stack Engineer',
    company_name: 'Sarabi Startup Studio',
    icon: sarabistudio,
    iconBg: '#333333',
    date: 'Feb 2023 - Feb 2024',
  },
  {
    title: 'Software Engineer',
    company_name: 'Earth Hero',
    icon: earthhero,
    iconBg: '#333333',
    date: 'Feb 2024 - Present',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'CompsAnalytics',
    description: 'An online property listing and valuation tool.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: compsanalytics,
    repo: 'https://github.com/Kapadokia-Titus/CompsAnalytics-Frontend',
    demo: 'https://comps-analytics.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Finalytics',
    description: 'A financial dashboard with a tinge of machine learning.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: finalytics,
    repo: 'https://github.com/KevinKipkoechMutai/finalytics_client',
    demo: 'https://finalytics.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Sociopedia',
    description:
      'A fully functional social media application.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
    ],
    image: sociopedia,
    repo: 'https://github.com/KevinKipkoechMutai/sociopedia_client',
    demo: 'https://sociopedia-eight.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'Mula$afi',
    description: `A gambling platform with crash, shuffle, and roulette games`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: mulasafi,
    repo: 'https://github.com/KevinKipkoechMutai',
    demo: 'https://mulasafi.com',
  },
  {
    id: 'project-5',
    name: 'Farmleaf',
    description:
      'A web-app designed for an agroforestry startup',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: farmleaf,
    repo: 'https://github.com/KevinKipkoechMutai/farmleaf_agroforestry',
    demo: 'https://farmleaf-agroforestry.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
