import ProjectsList from "../components/Projects/List";

const Projects = ({ projects }) => {
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