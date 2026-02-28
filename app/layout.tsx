import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Modern 3D Interactive Portfolio',
  description: 'Website portofolio personal berbasis Next.js dengan desain modern, interaktif, dan elemen 3D',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased text-foreground bg-background selection:bg-primary/30 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
