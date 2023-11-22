import React from 'react';
import Image from 'next/image';
import Cover from '../../assets/Cover.jpg';

const HeaderBar: React.FC = () => {
  return (
    <>
      <div className='absolute w-full z-[1] h-[200px] bg-gradient-to-b from-transparent to-[70%] to-white dark:to-slate-900'></div>
      <div className='absolute'>
        <Image
          className='object-cover h-[200px] dark:opacity-100 transistion-all duration-300'
          src={Cover}
          alt='Header Image'
          placeholder='blur'
        />
      </div>
    </>
  );
};

export default HeaderBar;
