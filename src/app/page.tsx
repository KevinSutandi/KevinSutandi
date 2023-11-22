'use client';

import React, { useEffect, useState } from 'react';
import CoverImage from '@/components/CoverImage';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileIconSection from '@/components/ProfileIconSection';
import { ThemeContext } from '@/utils/themeContext';
import FooterBar from '@/components/FooterBar';

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const initialTheme =
      localStorage.theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    localStorage.setItem('theme', initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className='h-screen bg-white overflow-hidden dark:bg-slate-900'>
        <CoverImage />
        <div className='flex flex-col items-center gap-1 justify-center relative top-28 bg-gradient-to-b from-transparent to-white to-[20%] dark:to-slate-900'>
          <ProfileHeader />
          <p className='text-slate-900 text-center text-xs md:text-sm dark:text-gray-200'>
            Freelance Photographer/Videographer & Coder <br />
            Bookings for Photography and Videography for 2024 are open <br />
          </p>
          <ProfileIconSection />
        </div>
        <FooterBar />
      </main>
    </ThemeContext.Provider>
  );
}
