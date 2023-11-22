import React from 'react';
import Image from 'next/image';
import Cover from '../../assets/Cover.jpg';

const HeaderBar: React.FC = () => {
  return (
    <div className='absolute'>
      <Image
        className='object-cover h-[200px] dark:opacity-50 transistion-all duration-300'
        src={Cover}
        alt='Header Image'
      />
    </div>
  );
};

export default HeaderBar;
