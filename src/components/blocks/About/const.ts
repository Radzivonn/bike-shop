import contributor1 from './assets/person-image-1.png';
import contributor2 from './assets/person-image-2.png';
import contributor3 from './assets/person-image-3.png';

export const TEAM_DESCRIPTION = [
  {
    id: 1,
    title: `Meet our team`,
    description: `Hi all! Welcome to the bike shop! This is a team project of RS School students. Our
  team consists of participants from different countries and a wide range of ages. We
  have united with the goal of going beyond the course and studying new unexplored
  technologies of modern development, as well as consolidating the knowledge gained.`,
  },
  {
    id: 2,
    title: `Team member's contributions`,
    description: `Based on the React / TS / SASS technology stack, we started implementing a digital
    commerce service project. Oleg (@gtailde) took on all the work with the platform
    API. Dmitry (@Firebrand-RS) concentrated on design, content and building
    components. Rodion (@Radzivonn) worked on the integration of created components
    and services, routing and validation.`,
  },
  {
    id: 3,
    title: `Team collaboration`,
    description: `Working as a team did not always go smoothly, but we learned lessons and worked on
    mistakes and shortcomings, did not give up and were able to complete the project.
    We gained valuable knowledge of working in a team and working with team
    development tools. Thanks to the course organizers and mentors, we began to better
    understand what knowledge and skills are most critical for us at this moment to
    work as web developers.`,
  },
];

export const CONTRIBUTOR_LIST = [
  {
    id: 1,
    image: contributor1,
    name: 'Oleh',
    role: 'frontend-developer',
    contribution: ['Develop Commercetools HTTP API custom integration solutions'],
    bio: [
      'Dmitry originally from a small city in north west of Russia. He went to study in the capital of the northwestern region.',
      'After graduation, he traveled around the country and settled in Yaroslavl. During this time, he fell in love with many things in digital art, such as digital illustration, 3D art, animation and motion design, and working on 2D-3D printing projects.',
      'Dmitry working as a technologist in an advertising agency. Build the printing process in production and cooperate with designers.',
      'Now he also writes scripts for Photoshop and is getting ready to look for a job as a web developer.',
    ],
    githubNickname: '@gtailde',
    githubLink: 'https://github.com/gtailde',
  },
  {
    id: 2,
    image: contributor2,
    name: 'Rodion',
    role: 'frontend-developer, team-lead',
    contribution: [
      'CommerceTools HTTP API Integration',
      'Client-side validation',
      'Routing Implementation',
      'Build React components, component interaction, user interaction',
    ],
    bio: [
      'Dmitry originally from a small city in north west of Russia. He went to study in the capital of the northwestern region.',
      'After graduation, he traveled around the country and settled in Yaroslavl. During this time, he fell in love with many things in digital art, such as digital illustration, 3D art, animation and motion design, and working on 2D-3D printing projects.',
      'Dmitry working as a technologist in an advertising agency. Build the printing process in production and cooperate with designers.',
      'Now he also writes scripts for Photoshop and is getting ready to look for a job as a web developer.',
    ],
    githubNickname: '@Radzivonn',
    githubLink: 'https://github.com/Radzivonn',
  },
  {
    id: 3,
    image: contributor3,
    name: 'Dmitry',
    role: 'frontend-developer',
    contribution: [
      'Agile Project Management',
      'CommerceTools Project Management',
      'UI/UX design',
      'Build React components, component interaction, user interaction',
    ],
    bio: [
      'Dmitry originally from a small city in north west of Russia. He went to study in the capital of the northwestern region.',
      'After graduation, he traveled around the country and settled in Yaroslavl. During this time, he fell in love with many things in digital art, such as digital illustration, 3D art, animation and motion design, and working on 2D-3D printing projects.',
      'Dmitry working as a technologist in an advertising agency. Build the printing process in production and cooperate with designers.',
      'Now he also writes scripts for Photoshop and is getting ready to look for a job as a web developer.',
    ],
    githubNickname: '@Firebrand-RS',
    githubLink: 'https://github.com/Firebrand-RS',
  },
];
