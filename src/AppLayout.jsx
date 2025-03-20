import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = isDarkMode ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []); // Empty dependency array ensures this runs only once on mount

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='flex h-full bg-zinc-50 dark:bg-black'>
      <div className='flex w-full'>
        <div className='fixed inset-0 flex justify-center sm:px-8'>
          <div className='relative flex w-full flex-col'>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;