import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeButton';
import selfie from "../assets/selfie.png";

const Navbar = ({ theme, toggleTheme }) => {
  const items = [
    { title: "About", link: "/about" },
    { title: 'Projects', link: '/projects' },
    { title: 'Contact', link: '/contact' }
  ];

  return (
    <header className='relative z-50 flex flex-none flex-col'> {/* Removed pointer-events-none */}
      <div className='order-last mt-[calc(--spacing(16)-(--spacing(3)))]'></div>

      <div className='sm:px-8 top-0 order-last -mb-3 pt-3'>
        <div className='mx-auto w-full max-w-7xl lg:px-8'>
          <div className='relative px-4 sm:px-8 lg:px-12'>
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className='top-(--avatar-top,--spacing(3)) w-full'>
                <div className="relative">
                  <Link to="/" className="block h-16 w-16 origin-left pointer-events-auto">
                    <img src={selfie} className='rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='top-0 z-10 h-16 pt-6'>
        <div className='sm:px-8 top-(--header-top,--spacing(6)) w-full'>
          <div className='mx-auto w-full max-w-7xl lg:px-8'>
            <div className='relative px-4 sm:px-8 lg:px-12'>
              <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                <div className='relative flex gap-4'>
                  <span className="flex flex-1"></span>
                  {/* Menu Items Here */}
                  <div className="navbar bg-base-100 shadow-sm rounded-box">
                    <div className="navbar-start">
                      <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                          </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                          {items.map((item, index) => (
                            <li key={index}>
                              <Link to={item.link}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                      <ul className="menu menu-horizontal px-1">
                        {items.map((item, index) => (
                          <li key={index}>
                            <Link to={item.link}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="navbar-end">
                      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;