import ProjectsList from "../components/Projects/List";
import { mdiHeartMultiple, mdiFileAccount, mdiWeatherSnowyHeavy, mdiSd } from '@mdi/js';
import selfie from "../assets/pics/selfie.png";
import pm from "../assets/proj-imgs/pm.png";

const Projects = () => {
  const projects = [
    {
      title: "Personal Travel Blog",
      description: "A Ruby on Rails app with role management, a backend/frontend for blog posting, and user auth.  Containerized with Docker, S3 for storage, and hosted on Netlify.",
      showCaseURL: "https://briana-and-axels-travels.com/",
      repoUrl: "https://github.com/trustpizza/rails-blog",
      imgUrl: `mdi:${mdiHeartMultiple}`
    },
    {
      title: "Resume Builder",
      description: "A React App that allows for users to build a Resume with educational and work experiences.",
      showCaseURL: "https://willowy-chimera-57be67.netlify.app/",
      repoUrl: "https://github.com/trustpizza/Resume-Builder",
      imgUrl: `mdi:${mdiFileAccount}`
    },
    {
      title: "Weather App",
      description: "A frontend JS app using API calls an open source weather API using location data to display local weather.",
      showCaseURL: "https://trustpizza.github.io/weather-app/",
      repoUrl: "https://github.com/trustpizza/weather-app",
      imgUrl: `mdi:${mdiWeatherSnowyHeavy}`
    },
    {
      title: "This Portfolio!",
      description: "A BEAUTIFUL! React app created with TailwindCSS and DaisyUI components to display a wonderful software developer's accolades.",
      showCaseURL: "https://axel-olsson-portfolio.netlify.app/",
      repoUrl: "https://github.com/trustpizza/portfolio",
      imgUrl: selfie
    },
    {
      title: "Memory Card Game",
      description: "A memory game using a Pokemon API built on React with TailwindCSS, DaisyUI, etc.",
      showCaseURL: "https://zesty-crisp-1826b1.netlify.app/",
      repoUrl: "https://github.com/trustpizza/memory-card",
      imgUrl: `mdi:${mdiSd}`
    },
    {
      title: "Project Management App | Frontend (in progress)",
      description: "The detached React frontend for a small Project Management software",
      showCaseURL: null,
      repoUrl: "https://github.com/trustpizza/task-harbor-frontend",
      imgUrl: pm
    },
    {
      title: "Project Management App | Backend (in progress)",
      description: "The detached Ruby on Rails backend for a small Project Management software",
      showCaseURL: null,
      repoUrl: "https://github.com/trustpizza/task-harbor-backend",
      imgUrl: pm
    },
    
  ]


  return(
    <>
    <main className="flex-auto mb-12">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
                  Odds and Ends I've created or am currently working on .
                </h1>
                <p className="mt-6 text-base text-base-content/70">
                  I've worked on many little projects here and there.  These are those that I'm most proud of.  All the projects seen here are open-sourced, with some being actively worked on currently.  Feel free to send a pull request if you have anything you can contribute!
                </p>
              </header>
            </div>
            <ProjectsList projects={projects}/>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Projects;