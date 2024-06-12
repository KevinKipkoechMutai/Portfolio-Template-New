import {
  frontend, sociopedia, finalytics,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  python, django, next, fastapi,
  farmleaf,
  reactjs,
  redux,
  tailwind,
  nodejs,
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
    name: "Django",
    icon: django,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  }, 
  {
    name: "NextJS",
    icon: next
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
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
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
    id: 'project-5',
    name: 'Farmleaf',
    description:
      'A climate action web app aiming to provide educational, operational, and financial support for Kenyan farmers seeking to adopt agroforestry.',
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
    demo: 'https://farm-leaf.com/',
  },
  {
    id: 'project-6',
    name: 'MeetingsIO',
    description:
      'An end-to-end videoconferencing web app with free Zoom-like capabilities.',
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
    repo: 'https://github.com/KevinKipkoechMutai/complete_videoconferencing_tool',
    demo: 'https://meetings-io.vercel.app/',
  }
  ,
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
  }
];

export { services, technologies, experiences, projects };
