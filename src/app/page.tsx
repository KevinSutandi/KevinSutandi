'use client';

import React, { useEffect, useState } from 'react';
import CoverImage from '@/components/ProfileSection/CoverImage';
import { ThemeContext } from '@/utils/themeContext';
import FooterBar from '@/components/FooterBar';
import ProfileSection from '@/components/ProfileSection';

export default function Home() {
  const [theme, setTheme] = useState('light');

  const setupTheme = () => {
    const initialTheme =
      localStorage.theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    localStorage.setItem('theme', initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    setTheme(initialTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
    setTheme(newTheme);
  };

  useEffect(() => {
    setupTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className='h-screen min-h-[650px] flex flex-col align-bottom justify-between bg-white overflow-y-scroll overflow-x-hidden dark:bg-slate-900 '>
        <CoverImage />
        <ProfileSection />
        <FooterBar />
      </main>
    </ThemeContext.Provider>
  );
}
