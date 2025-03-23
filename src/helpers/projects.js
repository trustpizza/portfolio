import { mdiHeartMultiple, mdiFileAccount, mdiWeatherSnowyHeavy, mdiSd } from '@mdi/js';
import selfie from "../assets/pics/selfie.png";
import pm from "../assets/proj-imgs/pm.png";

const projects = [
  {
    title: "Personal Travel Blog",
    description: "A Ruby on Rails app with role management, a backend/frontend for blog posting, and user auth.  Containerized with Docker, S3 for storage, and hosted on Netlify.",
    showCaseURL: "https://briana-and-axels-travels.com/",
    repoUrl: "https://github.com/trustpizza/rails-blog",
    imgUrl: `mdi:${mdiHeartMultiple}`,
    languages: ["rails", "aws", "docker"]
  },
  {
    title: "Resume Builder",
    description: "A React App that allows for users to build a Resume with educational and work experiences.",
    showCaseURL: "https://willowy-chimera-57be67.netlify.app/",
    repoUrl: "https://github.com/trustpizza/Resume-Builder",
    imgUrl: `mdi:${mdiFileAccount}`,
    languages: ["react", "tailwindcss"]
  },
  {
    title: "Weather App",
    description: "A frontend JS app using API calls an open source weather API using location data to display local weather.",
    showCaseURL: "https://trustpizza.github.io/weather-app/",
    repoUrl: "https://github.com/trustpizza/weather-app",
    imgUrl: `mdi:${mdiWeatherSnowyHeavy}`,
    languages: ["javascript", "tailwindcss"]
  },
  {
    title: "This Portfolio!",
    description: "A BEAUTIFUL! React app created with TailwindCSS and DaisyUI components to display a wonderful software developer's accolades.",
    showCaseURL: "https://axel-olsson-portfolio.netlify.app/",
    repoUrl: "https://github.com/trustpizza/portfolio",
    imgUrl: selfie,
    languages: ["react", "tailwindcss", "javascript"]
  },
  {
    title: "Memory Card Game",
    description: "A memory game using a Pokemon API built on React with TailwindCSS, DaisyUI, etc.",
    showCaseURL: "https://zesty-crisp-1826b1.netlify.app/",
    repoUrl: "https://github.com/trustpizza/memory-card",
    imgUrl: `mdi:${mdiSd}`,
    languages: ["react", "tailwindcss", "javascript"]
  },
  {
    title: "Project Management App | Frontend (in progress)",
    description: "The detached React frontend for a small Project Management software",
    showCaseURL: null,
    repoUrl: "https://github.com/trustpizza/task-harbor-frontend",
    imgUrl: pm,
    languages: ["react", "tailwindcss"]
  },
  {
    title: "Project Management App | Backend (in progress)",
    description: "The detached Ruby on Rails backend for a small Project Management software",
    showCaseURL: null,
    repoUrl: "https://github.com/trustpizza/task-harbor-backend",
    imgUrl: pm,
    languages: ["ruby", "rails"]
  },
]

export default projects;