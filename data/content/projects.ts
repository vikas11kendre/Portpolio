// import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Blogging Website",
    desc: "Developed full Stack (MERN) SEO Multi user blogging platform that allows users to create and manage blogs with like and comment functionalities.",
    img: "/static/projects/vkblog.jpg",
    link: "https://vkblogs.netlify.app/",
    github: "https://github.com/vikas11kendre/VKBlog.git",
    tags: [
      "React",
      "Redux",
      "MongoDb",
      "Express Js",
      "Node js",
      "JWT Auth",
      "Material UI",
      "Google Oauth",
      "Cloudinary",
      "Middleware",

      "AWS EC2",
      "CRUD",
      "WYSIWYG rich text editor",
    ],
  },
  {
    id: 1,
    title: "StartUp Landing Page",
    desc: "Designed website for startup with front-end dev work to integrate with vending machine color platte, implemented custom illustrations across website",
    img: "/static/projects/mercados.png",
    link: "https://venmercados.netlify.app/",
    github: "https://github.com/vikas11kendre/MercadosWebsite.git",
    tags: [
      "react",
      "Material Ui",
      "responsive",
      "Adobe Illustrator",

      "Figma",
      "UI UX",
      "custom Illstrations",
    ],
  },
  {
    id: 2,
    title: "Fitness Club ",
    desc: "This website is a great resource for finding exercises to help with understanding and visualizing how the exercises are performed. Additionally, the website includes videos recommendation from YouTube to help with understanding how to properly perform the exercises. ",
    img: "/static/projects/fitness.png",
    link: "https://vk-fitness.netlify.app/",
    github: "https://github.com/vikas11kendre/project_fitness_app",
    tags: [
      "React",
      "responsive",
      "Materail UI",
      "JSON",
      "Youtube API",
      "Rapid API",
    ],
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "Portfolio Website created using react, snaity.io as headless csm , framer motion for animations",
    img: "/static/projects/vkp.png",
    link: "https://vikas-kendre-portfolio.netlify.app/",
    github: " https://github.com/vikas11kendre/my_portfolio",
    tags: [
      "React",
      "Framer Motion",
      "SCSS",
      "Material Ui",
      "Sanity",
      "API",
      "figma",
    ],
  },
  // {
  //   id: 4,
  //   title: "Create HTML Boilerplate",
  //   desc: "Generate a vanilla HTML boilerplate in a flash!",
  //   img: "/static/projects/create-html-boilerplate.png",
  //   github: "https://github.com/BraydenTW/create-html-boilerplate",
  //   tags: ["Node", "Javascript", "NPM", "HTML"],
  // },
  // {
  //   id: 5,
  //   title: "8 Ball in your CLI",
  //   desc: "An 8 ball simulation in your CLI built with Rust!",
  //   img: "/static/projects/8ball-rust.png",
  //   github: "https://github.com/BraydenTW/8ball-rust",
  //   tags: ["Rust", "CLI", "Game"],
  // },
  // {
  //   id: 6,
  //   title: "DontLeaveMe 😭",
  //   desc: "Beg for users to stay on your website.",
  //   img: "/static/projects/dontleaveme.png",
  //   link: "https://github.com/BraydenTW/dontleaveme/",
  //   tags: ["Javascript", "NPM"],
  // },
  // {
  //   id: 7,
  //   title: "Madlibs",
  //   desc: "A simple version of Madlibs built for the web!",
  //   img: "/static/projects/madlibs.png",
  //   link: "https://fillemin.netlify.app/",
  //   github: "https://github.com/braydentw/madlibs",
  //   tags: ["HTML", "CSS", "Javascript"],
  // },
];

// export const allTags = [];

// projects.forEach((project) => {
//   project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
// });

// export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
