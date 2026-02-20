import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import {css} from '../styled-system/css';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="es" className={css({ h: 'full' })}  suppressHydrationWarning>
      <body className={css({ 
        display: 'flex',
        bg: 'background',
        color: 'text',
        minH: 'full', 
        flexDirection: 'column',
        transition: 'colors 0.2s ease'
      })}>
        <ThemeProvider>
          <Navbar />
          
          <div className={css({ flex: '1' })}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
