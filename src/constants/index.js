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
  tailwind,
  c,
  cpp,
  java,
  mysql,
  threejs,
  python,
  android_studio,
  iot,
  Accident_Alert,
  college_management,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IoT Developer",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "FrontEnd developer",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      "Skilled in developing and maintaining modern web applications using HTML, CSS, JavaScript, and related technologies such as React.js, Three.js, and Tailwind CSS. Proficient in using Redux for state management.",
      "Collaborates effectively with cross-functional teams to deliver high-quality products that meet user requirements and business objectives.",
      "Implements responsive design, cross-browser compatibility, and frontend performance optimization techniques to create seamless user experiences on desktop and mobile devices.",
    ],
  },
  {
    title: "BackEnd Developer",
    icon: backend,
    iconBg: "#E6DEDD",
    points: [
      "Developed and maintained scalable and efficient MySQL databases using best practices such as normalization, indexing, and query optimization.",
      "Utilized Next.js to create server-side rendered React applications, improving SEO and overall website performance.",
      "Developed web applications and APIs using Django, a Python-based web framework that follows the model-view-controller (MVC) pattern, resulting in clean and maintainable code.",
    ],
  },
  {
    title: "IoT Developer",
    icon: iot,
    iconBg: "#383E56",
    points: [
      "Designed and implemented IoT systems for various industries and domains, such as energy management, logistics, healthcare, and agriculture.",
      "Developed smart devices that collect and analyze data from sensors, and integrated them with cloud-based platforms to enable real-time monitoring and analysis.",
      "Leveraged programming languages, embedded systems, communication protocols, and machine learning algorithms to build end-to-end IoT solutions that solve real-world problems.",
    ],
  },
  {
    title: "Android Studio",
    icon: android_studio,
    iconBg: "#E6DEDD",
    points: [
      "Developed and maintained native Android applications using Java, along with Android Studio, the official integrated development environment (IDE) for Android app development.",
      "Utilized modern Android libraries and frameworks, such as Retrofit, Dagger, and Room, to create scalable and efficient applications that meet user requirements and business objectives.",
      "Ensured app performance and stability by implementing best practices for memory management, network connectivity, and data persistence, resulting in seamless user experiences.",
    ],
  },
];
const projects = [
  {
    name: "Accident Alert",
    description:
      "Hardware-based accident alert application that uses sensors to detect accidents and alert emergency services. The application is designed to be used in two-wheeled vehicles.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "cpp",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: Accident_Alert,
    source_code_link: "https://github.com/Haafii/Accident-alert",
  },
  {
    name: "College Management",
    description:
      "This is the application that uses to add and managing students and faculties of a college by the admins. Also used to get details of every person in the college",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: college_management,
    source_code_link: "https://github.com/Haafii/College-management",
  },
  {
    name: "Personal Portfolio",
    description:
      "A modern portfolio built with ReactJS, Tailwind CSS, and ThreeJS. Features immersive 3D graphics and responsive design",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Haafii/portfolio.git/",
  },
];

export { services, technologies, experiences, projects };
