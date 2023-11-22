import React from 'react';

type ProfileCardProps = {
  href: string;
  children: React.ReactNode;
};

const ProfileCard = ({ href, children }: ProfileCardProps) => {
  return (
    <a
      href={href}
      className='profile-card text-black p-5 px-10 w-auto shadow-md shadow-gray-300 rounded-lg bg-gray-200 dark:bg-slate-700 dark:text-white dark:shadow-slate-800 transition-all duration-300 md:w-100'
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};

export default ProfileCard;
