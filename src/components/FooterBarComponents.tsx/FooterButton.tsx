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
      className=' text-xs md:text-base text-slate-900 shadow-gray-300 dark:shadow-slate-800 cursor-pointer dark:text-white rounded-lg p-3 shadow-md bg-gray-200 dark:bg-slate-700 hover:opacity-50 transition-all duration-300'
      aria-label={ariaLabel}
      onClick={onPress}
      href={href}
      {...(href && { target: '_blank', rel: 'noreferrer' })}
    >
      {text}
    </a>
  );
}
