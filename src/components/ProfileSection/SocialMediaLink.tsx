import { Icon } from '@iconify/react';
import React from 'react';

type SocialMediaLinkProps = {
  href: string;
  icon: string;
  label: string;
  color: string;
};

const SocialMediaLink = ({
  href,
  icon,
  label,
  color,
}: SocialMediaLinkProps) => (
  <a
    href={href}
    target='_blank'
    rel='noreferrer'
    aria-label={label}
    className='w-6 h-6 mx-3'
  >
    <div className='flex align-middle justify-center hover:opacity-50 transition-all ease-in-300'>
      <Icon icon={icon} color={color} width='24' height='24' />
    </div>
  </a>
);

export default SocialMediaLink;
