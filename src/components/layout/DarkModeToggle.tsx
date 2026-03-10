'use client';

import { useEffect, useState } from 'react';

import { MdDarkMode, MdLightMode } from 'react-icons/md';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme === 'light';
  return window.matchMedia('(prefers-color-scheme: light)').matches;
};

const DarkModeToggle = () => {
  const [isLight, setIsLight] = useState(getInitialTheme);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full p-1 transition-all duration-500 focus-ring group hover:shadow-lg hover:shadow-[var(--accent)]/25 gradient-bg"
    >
      {/* Toggle handle */}
      <div
        className={`w-4 h-4 bg-[var(--foreground)] rounded-full shadow-lg transform transition-transform duration-500 ease-out ${
          isLight ? 'translate-x-6' : 'translate-x-0'
        }`}
      />

      {/* Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
        <MdLightMode
          size={12}
          className={`text-yellow-400 transition-all duration-300 ${
            isLight ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        />
        <MdDarkMode
          size={12}
          className={`text-blue-400 transition-all duration-300 ${
            !isLight ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm gradient-bg"></div>
    </button>
  );
};

export default DarkModeToggle;
