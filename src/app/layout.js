// app/layout.js
import './globals.css';
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Fasakin Henry',
  description: 'Built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${plusJakarta.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
