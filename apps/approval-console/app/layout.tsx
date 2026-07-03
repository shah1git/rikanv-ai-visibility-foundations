import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RikaNV AI Console',
  description: 'Панель решений для агентного процесса RikaNV.',
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
