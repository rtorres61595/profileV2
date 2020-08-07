import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Robert/Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Robert Torres',
  subtitle: 'I do cool stuff with code',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'I am a Full Stack Developer with knowledge in technologies and skills like',
  paragraphTwo:
    'Object-oriented programming, React, Java-Script, mysql, mongodb, NodeJS, Git, Express, Handlebars, Jquery',
  paragraphThree:
    'Sales of Real Estate and Cars, Business Strategy,Team Work, Time Management, Employee Training, Communication, Self-Management, Team Management and Reach dead-lines',
  resume:
    'https://docs.google.com/document/d/1gV0z_CJtrB9yKbXY_NAtZXaQ4egG8Sa_ixu4yoqHsVw/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'logo1.jpg',
    title: 'Quest of Corona',
    info: 'Fun game me and some friends made to have a laugh during these times',
    info2:
      'tehnologies used are JavaScript, Node.JS, Express, Handlebars and MySQL and other frame works for the style',
    url: 'https://bcs-project-2.herokuapp.com/',
    repo: 'https://github.com/rtorres61595/Quest-of-Corona', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project1.jpg',
  //   title: 'Quest of Corona',
  //   info: 'Fun game me and some friends made to have a laugh during these times',
  //   info2:
  //     'tehnologies used are JavaScript, Node.JS, Express, Handlebars and MySQL and other frame works for the style',
  //   url: 'https://bcs-project-2.herokuapp.com/',
  //   repo: 'https://github.com/rtorres61595/Quest-of-Corona', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: `let's work together`,
  btn: `rtorres61595@gmail.com`,
  email: 'rtorres61595@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/settings/profile/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/robert-torres-495921141/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rtorres61595',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
