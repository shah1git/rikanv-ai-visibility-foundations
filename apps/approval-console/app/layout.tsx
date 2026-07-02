
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RikaNV AI Console',
  description: 'Human control plane for RikaNV agent-first approval workflows.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
