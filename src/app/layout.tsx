import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import {css} from '../styled-system/css';
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Micelio | Gestión de Cultivos",
    template: "%s | Micelio"
  },
  description: "Plataforma inteligente para el monitoreo y optimización de cultivos.",
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: ["Micología", "Cultivo de Plantas", "Automatización", "Lotes de Cultivo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es" className={css({ h: 'full' })} suppressHydrationWarning>
        <body className={css({ 
          bg: 'background',
          color: 'text',
          minH: '100vh', 
          display: 'flex',
          flexDirection: 'column',
          transition: 'colors 0.2s ease'
        })}>
          
          <ThemeProvider>
            <Navbar />
            
            
            <main className={css({ 
              flex: '1', 
              display: 'flex', 
              flexDirection: 'column',
              position: 'relative' 
            })}>
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
