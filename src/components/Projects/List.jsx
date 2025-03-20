import ProjectCard from "./card";

const ProjectsList = ({ projects }) => {
  return (
    <div className="mt-16 sm:mt-20">
            <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;