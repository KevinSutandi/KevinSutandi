import React from 'react';

type FooterButtonProps = {
  ariaLabel: string;
  href?: string;
  onPress?: () => void;
  text: string;
};

export default function FooterButton({
  ariaLabel,
  href,
  onPress,
  text,
}: FooterButtonProps) {
  return (
    <a
      className='text-slate-900 cursor-pointer dark:text-white rounded-lg p-3 py-2 bg-gray-200 dark:bg-slate-700 hover:opacity-50 transition-all duration-300'
      aria-label={ariaLabel}
      onClick={onPress}
      href={href}
      {...(href && { target: '_blank', rel: 'noreferrer' })}
    >
      {text}
    </a>
  );
}
