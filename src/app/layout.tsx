import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StudMusic - Student Music Streaming',
  description: 'Stream from multiple free music sources. Built for students.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-bg text-white antialiased">
        {children}
      </body>
    </html>
  )
}
