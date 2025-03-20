import Icon from '@mdi/react';
import { mdiBriefcaseOutline } from '@mdi/js';

const WorkSection = ({ workExperiences }) => {
  return (
    <div className="sm:px-8 mt-12 mb-24 md:mt-20">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col gap-16"></div>
              <div className="space-y-10 lg:pl-16 xl:pl-24">
                <div className="rounded-2xl border border-base-300 p-6">
                  <h2 className="flex text-sm font-semibold text-base-content">
                    <Icon path={mdiBriefcaseOutline} size={1} />
                    <span className="ml-3">Work</span>
                  </h2>
                  <ol className="mt-6 space-y-4">
                    {workExperiences.map((experience, index) => (
                      <li key={index} className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-base-200 dark:ring-0 bg-white">
                          {experience.iconPath && <img src={experience.iconPath} alt={`${experience.positionTitle} Icon`} className="h-6 w-6" />}
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-base-content">
                            {experience.companyName}
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-base-content/70">
                            {experience.positionTitle}
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-base-content/60"
                            aria-label={`${experience.startDate} until ${experience.endDate}`}
                          >
                            <time dateTime={experience.startDate}>{experience.startDate}</time>{' '}
                            <span aria-hidden="true">—</span>{' '}
                            <time dateTime={experience.endDate}>{experience.endDate}</time>
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;