import './globals.css';
import { Inter as FontSans } from 'next/font/google';

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'HTMujahid',
  description: 'Portfolio of HTMujahid',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-white dark:bg-black font-sans antialiased',
          fontSans.variable,
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
