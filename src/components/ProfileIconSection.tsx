import React from 'react';
import { Icon } from '@iconify/react';
import { ThemeContext } from '@/utils/themeContext';

export default function ProfileIconSection() {
  const { theme } = React.useContext(ThemeContext);

  // Set the color based on the theme
  const iconColor = theme === 'dark' ? '#ffffff' : '#000000';

  return (
    <div className='flex justify-center items-center mt-2'>
      <a
        href='https://www.instagram.com/kevinesutandi/'
        target='_blank'
        rel='noreferrer'
        aria-label='Instagram Link'
        className='w-6 h-6 mx-3'
      >
        <div className='flex align-middle justify-center'>
          <Icon icon='mdi:instagram' color={iconColor} width='24' height='24' />
        </div>
      </a>
      <a
        href='https://www.linkedin.com/in/kevinesutandi/'
        target='_blank'
        rel='noreferrer'
        aria-label='LinkedIn Link'
        className='w-6 h-6 mx-3'
      >
        <div className='flex align-middle justify-center'>
          <Icon
            icon='ri:linkedin-fill'
            color={iconColor}
            width='24'
            height='24'
          />
        </div>
      </a>
      <a
        href='https://wa.me/61412123138'
        target='_blank'
        rel='noreferrer'
        aria-label='LinkedIn Link'
        className='w-6 h-6 mx-3'
      >
        <div className='flex align-middle justify-center'>
          <Icon
            icon='ic:baseline-whatsapp'
            color={iconColor}
            width='24'
            height='24'
          />
        </div>
      </a>
    </div>
  );
}
