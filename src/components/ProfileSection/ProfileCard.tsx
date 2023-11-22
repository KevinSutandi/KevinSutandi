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
      className='profile-card text-black p-5 px-10 w-auto shadow-md shadow-gray-300 rounded-lg bg-gray-200 dark:bg-slate-700 dark:text-white dark:shadow-slate-800 transition-all duration-300 md:w-100'
    >
      {text}
    </a>
  );
}
