import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trending Shorts - Agentic',
  description: 'Koleksi video pendek trending terkini untuk anda.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  );
}
