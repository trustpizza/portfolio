import { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiWeatherSunny, mdiWeatherNight } from '@mdi/js';

const themeIconMap = {
  "dark": mdiWeatherSunny,
  "light": mdiWeatherNight
};

const ThemeToggleButton = ({ theme, toggleTheme }) => {
  const [currentIcon, setCurrentIcon] = useState(themeIconMap[theme]); // Initialize with the correct icon

  useEffect(() => {
    setCurrentIcon(themeIconMap[theme]);
  }, [theme]);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <button className="btn btn-soft mr-2" onClick={handleToggle}>
      <Icon path={currentIcon} size={1} />
    </button>
  );
};

export default ThemeToggleButton;