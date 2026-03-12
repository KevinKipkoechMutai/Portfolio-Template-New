import {
  frontend, sociopedia,  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  python, django, next, fastapi,
  farmleaf,
  reactjs,
  docker,
  postgresql,
  compsanalytics,
  mulasafi,
  moringa,
  kvm,
  temec,
  sarabistudio,
  earthhero, meetingsio, carepulse
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
    id: 'tech',
    title: 'Skills',
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
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'Docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Engineering Intern',
    company_name: "Tea Machinery & Engineering Company",
    icon: temec,
    iconBg: '#333333',
    date: 'Jun 2018 - Dec 2018',
  },
  {
    title: 'Engineering Intern',
    company_name: 'Kenya Vehicle Manufacturers',
    icon: kvm,
    iconBg: '#333333',
    date: 'Jun 2019 - Dec 2019',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Moringa School',
    icon: moringa,
    iconBg: '#333333',
    date: 'Jun 2022 - Jan 2023',
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
    date: 'Feb 2024 - May 2025',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'CompsAnalytics',
    description: 'A property valuation platform that leverages machine learning to predict accurate property values based on features and location.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'fastapi',
        color: 'green-text-gradient',
      },
      {
        name: 'postgres',
        color: 'pink-text-gradient',
      },
    ],
    image: compsanalytics,
    repo: 'https://github.com/Kapadokia-Titus/CompsAnalytics-Frontend',
    demo: 'https://comps-analytics.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'MeetingsIO',
    description:
      'A seamless video conferencing platform enabling users to create and join meetings, share screens, and chat in real-time.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'fastapi',
        color: 'pink-text-gradient',
      },
    ],
    image: meetingsio,
    repo: 'https://github.com/KevinKipkoechMutai/complete_videoconferencing_tool',
    demo: 'https://meetings-io.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Carepulse',
    description: 'A comprehensive hospital management system for streamlined appointment scheduling and patient record tracking.',
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
        name: 'shadcn-ui',
        color: 'pink-text-gradient',
      },
    ],
    image: carepulse,
    repo: 'https://github.com/KevinKipkoechMutai/hospital-appointment-manager',
    demo: 'https://mulasafi.com',
  },
  {
    id: 'project-4',
    name: 'Sociopedia',
    description:
        'A full-featured social networking application supporting media sharing, user connections, and real-time interactions.',
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
  }
];

export { services, technologies, experiences, projects };
