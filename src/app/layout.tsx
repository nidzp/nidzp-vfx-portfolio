import "./globals.css";

export const metadata = {
  title: "NDZP.VFX | Elite VFX, Anime & AI Video Editor",
  description: "Professional & Serbian VFX, Anime, AI video edits for TikTok, YouTube, Instagram, and global brands. Instant delivery. Brutal workflow. No gimmicks.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
