// app/layout.tsx
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NIDZP.VFX Portfolio',
  description: 'High-end anime-inspired VFX edits by nidzp.vfx',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
