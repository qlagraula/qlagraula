import { useEffect, useState } from 'react';

const THEME_KEY = 'theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

export default function SwitchTheme() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Get the initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem(THEME_KEY);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? DARK_THEME : LIGHT_THEME);
    
    // Apply the theme
    if (initialTheme === DARK_THEME) {
      document.documentElement.classList.add(DARK_THEME);
    } else {
      document.documentElement.classList.remove(DARK_THEME);
    }
    
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    
    if (newTheme === DARK_THEME) {
      document.documentElement.classList.add(DARK_THEME);
    } else {
      document.documentElement.classList.remove(DARK_THEME);
    }
  };

  // Don't render anything until we know the theme
  if (theme === null) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === DARK_THEME ? 'light' : 'dark'} theme`}
    >
      {theme === DARK_THEME ? (
        "Light"
      ) : (
        "Dark"
      )}
    </button>
  );
}
