import Icon from '@mdi/react';
import { mdiAws, mdiDocker, mdiLanguageJavascript, mdiLanguageRuby, mdiLanguageRubyOnRails, mdiReact, mdiTailwind } from '@mdi/js';
const iconSize = 1.5

const iconMapping = {
  "ruby": <Icon path={mdiLanguageRuby} size={iconSize} key="ruby" className='transition-colors duration-200 text-red-700 sm:text-base-content sm:group-hover:text-red-700' />,
  "tailwindcss": <Icon path={mdiTailwind} size={iconSize} key="tailwindcss" className='transition-colors duration-200 text-blue-400 sm:text-base-content sm:group-hover:text-blue-400' />,
  "javascript": <Icon path={mdiLanguageJavascript} size={iconSize} key="javascript" className='transition-colors duration-200 sm:text-base-content text-yellow-300 sm:group-hover:text-yellow-300'/>,
  "rails": <Icon path={mdiLanguageRubyOnRails} size={iconSize} key="rails" className='transition-colors duration-200 sm:text-base-content  text-red-500 sm:group-hover:text-red-500'/>,
  "docker": <Icon path={mdiDocker} size={iconSize} key="docker" className='transition-colors duration-200  text-blue-500 sm:text-base-content sm:group-hover:text-blue-500'/>,
  "aws": <Icon path={mdiAws} size={iconSize} key="aws" className='transition-colors duration-200  text-yellow-500 sm:text-base-content sm:group-hover:text-yellow-500'/>,
  "react": <Icon path={mdiReact} size={iconSize} key="react" className='transition-colors duration-200  text-blue-500 sm:text-base-content sm:group-hover:text-blue-500'/>,
};

export default iconMapping;