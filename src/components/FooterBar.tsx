import React, {useContext} from "react";
import { ThemeContext } from "@/utils/themeContext";

export default function FooterBar() {
const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className='absolute bottom-0 flex flex-col items-center justify-center w-full h-20 bg-white dark:bg-slate-900'>
      <button
        className='text-slate-900 dark:text-white rounded-lg p-2 bg-gray-200 dark:bg-slate-700 hover:opacity-50'
        onClick={toggleTheme}
      >
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}