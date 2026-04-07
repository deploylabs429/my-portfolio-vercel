'use client';

/** Theme sync uses `useSyncExternalStore` — if your file still has `useLayoutEffect` + `setIsLight`, replace it with the latest version from the repo. */
import { useEffect, useSyncExternalStore } from 'react';

import { MdDarkMode, MdLightMode } from 'react-icons/md';

const getStoredThemePreference = (): boolean => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme === 'light';
  return window.matchMedia('(prefers-color-scheme: light)').matches;
};

/** Same-tab updates (storage events only fire for other tabs). */
let themeEpoch = 0;
const themeListeners = new Set<() => void>();

const emitThemeChange = () => {
  themeEpoch += 1;
  themeListeners.forEach((cb) => cb());
};

const subscribe = (onStoreChange: () => void) => {
  if (typeof window === 'undefined') return () => {};
  themeListeners.add(onStoreChange);
  window.addEventListener('storage', onStoreChange);
  const mq = window.matchMedia('(prefers-color-scheme: light)');
  mq.addEventListener('change', onStoreChange);
  return () => {
    themeListeners.delete(onStoreChange);
    window.removeEventListener('storage', onStoreChange);
    mq.removeEventListener('change', onStoreChange);
  };
};

const getSnapshot = (): boolean => {
  void themeEpoch;
  return getStoredThemePreference();
};

const getServerSnapshot = (): boolean => false;

const DarkModeToggle = () => {
  const isLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [isLight]);

  const toggleTheme = () => {
    const next = !isLight;
    localStorage.setItem('theme', next ? 'light' : 'dark');
    emitThemeChange();
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full p-1 transition-all duration-500 focus-ring group hover:shadow-lg hover:shadow-[var(--accent)]/25 gradient-bg"
    >
      <div
        className={`w-4 h-4 bg-[var(--foreground)] rounded-full shadow-lg transform transition-transform duration-500 ease-out ${
          isLight ? 'translate-x-6' : 'translate-x-0'
        }`}
      />

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

      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm gradient-bg"></div>
    </button>
  );
};

export default DarkModeToggle;
