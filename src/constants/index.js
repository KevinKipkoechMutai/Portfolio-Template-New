import {
  frontend,
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
  gericht,
  gpt3,
  hoobank,
  mulasafi,
  moringa,
  techchimp,
  kvm,
  temec
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
    title: 'Junior Software Developer (Volunteer)',
    company_name: 'Tea Engineering and Machinery Company',
    icon: temec,
    iconBg: '#333333',
    date: 'Jan 2018 - Dec 2018',
  },
  {
    title: 'Junior Software Developer (Volunteer)',
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
    title: 'Full Stack Developer',
    company_name: 'Techchimp Solutions',
    icon: techchimp,
    iconBg: '#333333',
    date: 'Jan 2023 - April 2023',
  },
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
    name: 'Farmleaf',
    description:
      'A web-app designed for an agroforestry startup.',
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
  {
    id: 'project-3',
    name: 'Gericht',
    description: 'An official restaurant website built with React.',
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
    image: gericht,
    repo: 'https://github.com/KevinKipkoechMutai/restaurant_landing_page',
    demo: 'https://restaurant-landing-page-gilt.vercel.app/',
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
    name: 'GPT-3',
    description:
      'Re-imagined official website for GPT-3.',
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
    image: gpt3,
    repo: 'https://github.com/KevinKipkoechMutai/react-refresher-UI',
    demo: 'https://react-refresher-ui.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
