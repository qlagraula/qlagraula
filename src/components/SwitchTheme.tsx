import { useEffect, useRef, useState } from 'react';

export const THEME_KEY = 'theme';
export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

export default function SwitchTheme() {
  const [theme, setTheme] = useState<string | null>(null);
  // @ts-ignore
  const checkRef = useRef<HTMLInputElement>(!null);

  useEffect(() => {
    const savedTheme = (() => {
      if (
        typeof localStorage !== 'undefined' &&
        localStorage.getItem('theme')
      ) {
        return localStorage.getItem('theme');
      }
    })();

    if (savedTheme) return setTheme(savedTheme);

    checkRef.current.indeterminate = true;
  }, []);

  const toggleTheme = () => {
    const newTheme = !theme ? 'dark' : theme === DARK_THEME ? 'light' : null;

    setTheme(newTheme);

    if (!newTheme) {
      checkRef.current.indeterminate = true;
      localStorage.removeItem(THEME_KEY);
      document.documentElement.removeAttribute('data-theme');
      return;
    }

    checkRef.current.indeterminate = false;
    localStorage.setItem(THEME_KEY, newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      <label className="swap swap-rotate btn btn-ghost">
        <input
          type="checkbox"
          ref={checkRef}
          className="outline-0"
          onChange={toggleTheme}
          checked={theme === DARK_THEME}
          aria-label={`Switch to ${
            !theme ? 'dark' : theme === DARK_THEME ? 'light' : 'system'
          } theme`}
        />

        <svg
          className="swap-off h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </g>
        </svg>

        <svg
          className="swap-indeterminate h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2v2m2.837 12.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715M16 12a4 4 0 0 0-4-4m7-3l-1.256 1.256M20 12h2"
          />
        </svg>

        <svg
          className="swap-on h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
          />
        </svg>
      </label>
    </>
  );
}
