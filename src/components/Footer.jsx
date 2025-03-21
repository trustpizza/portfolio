import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCodeTags } from '@mdi/js';

const Footer = ({ linkItems = [] }) => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base border-t border-accent items-center p-4">
        <aside className="grid-flow-col items-center">
          <Icon path={mdiCodeTags} size={2} />
          <p>Axel Olsson</p>
        </aside>

        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          {linkItems.map((item, index) => (
            <Link key={index} to={item.link} className="link link-hover link-info">
              {item.title}
            </Link>
          ))}
        </nav>
      </footer>
    </>
  );
};

export default Footer;