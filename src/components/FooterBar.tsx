import React, { useContext } from 'react';
import { ThemeContext } from '@/utils/themeContext';
import FooterButton from './FooterBarComponents.tsx/FooterButton';

export default function FooterBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className=' p-5 mt-12 mb-5 z-20 flex flex-row gap-5 items-center justify-center w-full h-20 bg-white dark:bg-slate-900'>
      <FooterButton
        ariaLabel='Switch Theme'
        onPress={toggleTheme}
        text={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`}
      />
      <FooterButton
        ariaLabel='Source Code on GitHub'
        href='https://github.com/KevinSutandi/mobile-portfolio'
        text='Source Code on GitHub'
      />
    </div>
  );
}
