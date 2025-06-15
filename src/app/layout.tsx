import "./globals.css";

export const metadata = {
  title: "NIDZP | Elite Video Editor & Creative Producer",
  description: "Elite video editing, production, and creative services. Fastest delivery, world-class results. Book now.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0b1220] text-[#e5f6ff]">{children}</body>
    </html>
  );
}
