import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import nudgelabs from '../images/portfolio/nudgelabs.png';
import racemate from '../images/portfolio/racemate.png';
import gurow from '../images/portfolio/gurow.png';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import portrait from '../images/Portrait.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Nouran Elsherif.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a <strong className="text-stone-100">Senior Mobile Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Optomatica</strong> developing robust cross-platform mobile applications using Flutter and React Native.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can see me trying out new activities and places.
        {/* In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>. */}
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: portrait,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Cairo, Egypt', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Egyptian', Icon: FlagIcon},
    {label: 'Interests', text: 'Art, Swimming', Icon: SparklesIcon},
    {label: 'Education', text: 'Ain Shams University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Optomatica', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Arabic',
        level: 10,
      },
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'German',
        level: 5,
      },
    ],
  },
  // {
  //   name: 'Frontend development',
  //   skills: [
  //     {
  //       name: 'Flutter',
  //       level: 9,
  //     },
  //     {
  //       name: 'React Native',
  //       level: 7,
  //     },
  //     {
  //       name: 'GraphQL',
  //       level: 6,
  //     },
  //   ],
  // },
  // {
  //   name: 'Backend development',
  //   skills: [
  //     {
  //       name: 'Node.js',
  //       level: 8,
  //     },
  //     {
  //       name: 'Rust',
  //       level: 5,
  //     },
  //     {
  //       name: 'Golang',
  //       level: 4,
  //     },
  //   ],
  // },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Flutter',
        level: 9,
      },
      {
        name: 'React Native',
        level: 8,
      },
      {
        name: 'Java',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      // {
      //   name: 'React Native',
      //   level: 7,
      // },
      // {
      //   name: 'GraphQL',
      //   level: 6,
      // },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Nest.js',
        level: 6,
      },
      // {
      //   name: 'Rust',
      //   level: 5,
      // },
      // {
      //   name: 'Golang',
      //   level: 4,
      // },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'NudgeLabs',
    description: 'A wellbeing-app.\n I was responsible for managing and developing the initial version of NudgeLabs application.',
    url: 'https://nudgelabs.com/',
    image: nudgelabs,
  },
  {
    title: 'Racemate',
    description: 'Digital running companion.\n I was responsible for developing multiple features in Racemate app, including but not ',
    url: 'https://racemate.ai',
    image: racemate,
  },
  {
    title: 'GuRow AI',
    description: 'Smart financial Advisor.\n I developed the GuRow AI which helped users figure out which assets to invest in based on their risk tolerance.',
    url: 'https://arabfinance.com/News/newdetails/4844',
    image: gurow,
  },
  {
    title: 'Request Plus',
    description: '',
    url: 'https://reactresume.com',
    image: racemate,
  },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2018-May 2019',
    location: 'Faculty of Computer And Information Sciences, Ain Shams University',
    title: 'Pre-Masters in Software Engineering',
    url:"https://cis.asu.edu.eg/",
    content: <p>I acquired vital skills essential for excelling in advanced academic studies. These included sharpening my research abilities, improving my academic writing, and developing a strong foundation in critical thinking.</p>,
  },
  {
    date: 'Sep 2013-May 2017',
    location: 'Faculty of Computer And Information Sciences, Ain Shams University',
    title: 'Bachelors of Computer Science',
    url:"https://cis.asu.edu.eg/",
    content: <p>Completing my bachelor's degree in Software Engineering provided me with a comprehensive understanding of programming languages, software development methodologies, and systems analysis. I honed my problem-solving skills by working on diverse projects, tackling real-world challenges in areas such as database management and software testing. The program not only equipped me with technical expertise but also fostered effective communication and collaboration within a team setting. </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2021-Present',
    location: 'Optomatica',
    title: 'Senior Software Engineer',
    url:'https://optomatica.com/',
    content: (
      <p>
        Worked and managed multiple projects in Flutter and React Native. Designed robust project architectures, ensuring scalability and maintainability tailored to specific project requirements.<br/>
        <strong>Stack:</strong> Flutter, Dart, React Native, JavaScript, TypeScript, NestJS, State management(Riverpod, MobX, Provider), Databases (SQLite, Prisma, GraphQL), Firebase tools (Firestore, Firebase Auth, Google CrashLytics and Analytics).<br/>
        <strong>Projects:</strong> NudgeLabs, Racemate, Gurow AI, Gate ID. 
      </p>
    ),
  },
  {
    date: 'Sep 2020-Aug 2021',
    location: 'Optomatica',
    title: 'Software Engineer',
    url:"https://optomatica.com/",
    content: (
      <p>
        Learned React Native and Flutter. Pioneered implementation of Widget testing to improve testing efficiency and time.<br/>
        <strong>Stack:</strong> React Native, JavaScript, TypeScript, State management(MobX, Provider), Databases (SQLite), OAuth, Firebase tools (Firestore, Firebase Auth, Google CrashLytics and Analytics).<br/>
        <strong>Projects:</strong> RaceFox, Kaching, NudgeLabs. 
      </p>
    ),
  },
  {
    date: 'Sep 2017-Sep 2020',
    location: 'Faculty of Computer and Information Sciences, Ain Shams University',
    title: 'Teaching Assistant',
    url:"https://cis.asu.edu.eg/",
    content: (
      <p>
      Designed and delivered engaging courses, fostering interactive learning that addressed diverse student needs at various proficiency levels. Guided and mentored students to enhance academic performance and equip them with essential skills for future success.<br/>
      <strong>Skills gained:</strong> Communication, mentorship, leadership, evaluation, presentation, and public speaking.<br/>
    </p>
    ),
  },
  {
    date: 'Mar 2018-Dec 2018',
    location: 'Digizilla',
    title: 'Software Engineer',
    url:"https://Digizilla.net/",
    content: (
      <p>
      Implemented and customized Odoo modules using Python. Learned React Native. Helped and mentored interns and newly employed developers learn Odoo module development.<br/>
      <strong>Stack:</strong> Odoo, Python, React Native, JavaScript.<br/>
      {/* <strong>Projects:</strong> RaceFox, Kaching, NudgeLabs.  */}
    </p>
    ),
  },
  {
    date: 'Aug 2016',
    location: 'Ana Trainee Program by Vodafone',
    title: 'Trainee',
    url:"https://vodafone.com.eg/",
    content: (
      <p>
      Was assigned to Sharepoint team, learned a lot about what they do and how they manage internal sharepoints sites and forms.
      </p>
    ),
  },
  {
    date: 'Aug 2015',
    location: 'Ana Trainee Program by Vodafone',
    title: 'Trainee',
    url:"https://vodafone.com.eg/",
    content: (
      <p>
      Was assigned to Business Intelligence team, learned a lot about what they do and how they manage customer promotions.
      </p>
    ),
  },
  
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'nouran.a.elsherif@gmail.com',
      href: 'mailto:nouran.a.elsherif@gmail.com',
    },
    // {
    //   type: ContactType.Location,
    //   text: 'Victoria BC, Canada',
    //   href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    // },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'nouran-elsherif',
      href: 'https://github.com/nouran-elsherif',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/nouran-elsherif'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/nouran-elsherif/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
