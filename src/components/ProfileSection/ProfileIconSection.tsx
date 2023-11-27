import React from 'react';
import { ThemeContext } from '@/utils/themeContext';
import SocialMediaLink from '@/components/ProfileSection/SocialMediaLink';

const ProfileIconSection = () => {
  const { theme } = React.useContext(ThemeContext);
  const iconColor = theme === 'dark' ? '#ffffff' : '#000000';

  return (
    <div className='flex justify-center items-center mt-5'>
      <SocialMediaLink
        href='https://www.instagram.com/kevinesutandi/'
        icon='mdi:instagram'
        label='Instagram Link'
        color={iconColor}
      />
      <SocialMediaLink
        href='https://www.linkedin.com/in/kevinesutandi/'
        icon='ri:linkedin-fill'
        label='LinkedIn Link'
        color={iconColor}
      />
      <SocialMediaLink
        href='mailto:kevinesutandi@gmail.com'
        icon='material-symbols:mail-outline'
        label='Email Link'
        color={iconColor}
      />
    </div>
  );
};

export default ProfileIconSection;
