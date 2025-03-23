import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const themeMapping = {
  "light": "emerald",
  "dark": "forest"
};

const AppLayout = () => {
  const linkItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: 'Projects', link: '/projects' },
  ];

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = isDarkMode ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', themeMapping[initialTheme]);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', themeMapping[newTheme]);
      return newTheme;
    });
  };

  return (
    <div className='bg-base min-h-screen flex flex-col items-center'>
      <div className='relative flex flex-col w-full max-w-5xl'>
        <Navbar theme={theme} toggleTheme={toggleTheme} linkItems={linkItems} />
        <div className = "flex-grow">
          <Outlet />
        </div>
        <Footer linkItems={linkItems} />
      </div>
    </div>
  );
};

export default AppLayout;