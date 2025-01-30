import { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Sync with localStorage if needed later
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setIsDark(savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    // localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-dark-background dark:bg-light-background"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
