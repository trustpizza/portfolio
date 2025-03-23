import Icon from '@mdi/react';
import { mdiLanguageRuby, mdiLinkVariant } from '@mdi/js';
import { Link } from 'react-router-dom';
import iconMapping from '../../helpers/iconMapping';

const ProjectCard = ({ project }) => {
  const isMdiIcon = typeof project.imgUrl === 'string' && project.imgUrl.startsWith('mdi:');
  const mdiPath = isMdiIcon ? project.imgUrl.replace('mdi:', '') : null;

  return (
    <div className="group relative flex flex-col h-full items-start">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-base-100 ring-1 shadow-md ring-base-200 dark:bg-base-300 dark:ring-0">
        {project.imgUrl && (isMdiIcon ? (
          <Icon path={mdiPath} size={2} />
        ) : (
          <img alt={project.title} loading="lazy" width="32" height="32" className="h-8 w-8 bg-cover" src={project.imgUrl} />
        ))}
      </div>
      <h2 className="mt-6 text-base font-semibold text-base-content">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-base-200 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-base-300/50"></div>
        {project.showCaseURL ? (
          <Link to={project.showCaseURL} target="_blank" className="link link-secondary relative z-10">
            {project.title}
          </Link>
        ) : (
          <span className="relative z-10">{project.title}</span>
        )}
      </h2>
      <p className="relative z-10 mt-2 text-sm text-base-content/70">
        {project.description}
      </p>
      <div className="relative w-full z-10 mt-auto pt-6 flex items-center justify-between text-sm font-medium text-base-content/50 transition group">
        <p className='relative z-10 flex items-center justify-between text-sm font-medium text-base-content/50 transition group-hover:text-primary'>
          <Icon path={mdiLinkVariant} size={1} />
          {project.repoUrl ? (
            <a href={project.repoUrl} className="link link-primary" target="_blank">
              github.com
            </a>
          ) : project.showCaseURL ? (
            <Link to={project.showCaseURL} className="link link-primary" target="_blank">
              {project.showCaseURL.replace(/https?:\/\//, '')}
            </Link>
          ) : null}
        </p>
        <p className='flex-end flex'>
          {project.languages.slice(0, 3).map((language, index) => {
            const icon = iconMapping[language.toLowerCase()];
            if (icon) {
              return (
                  icon
              );
            }
            return language.toLowerCase();
          })}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;