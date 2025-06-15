import './globals.css';

export const metadata = {
  title: 'NDZP | Elite Video Editor & Producer',
  description: 'Brutal workflow. Max results. Global quality. No gimmicks.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
