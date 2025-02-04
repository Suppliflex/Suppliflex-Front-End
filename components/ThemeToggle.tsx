import { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Read saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme !== 'light');
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light'); // Save to localStorage
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-800 dark:bg-gray-200">
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
