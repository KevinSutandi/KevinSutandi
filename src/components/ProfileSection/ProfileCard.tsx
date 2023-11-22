import React from 'react';

type ProfileCardProps = {
  href: string;
  text: string;
};

export default function ProfileCard({ href, text }: ProfileCardProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      type='button'
      className='text-black p-5 w-full shadow-md shadow-gray-300 rounded-lg bg-gray-200 dark:bg-slate-700 dark:text-white dark:shadow-slate-800 hover:bg-gray-300 dark:hover:bg-slate-800 transition-all duration-300'
    >
      {text}
    </a>
  );
}
