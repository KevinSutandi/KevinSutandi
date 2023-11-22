import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '700'] });

export const metadata: Metadata = {
  title: '@kevinesutandi',
  description: 'Get to know Kevin Sutandi More!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className=''>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
