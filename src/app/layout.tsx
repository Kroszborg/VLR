import "./globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "VLR Group: Vision Language Research",
  description: "Advancing the field of vision and language research",
  icons: {
    icon: [
      { url: '/vlricon.ico' },
      { url: '/vlricon.ico', sizes: '192x192', type: 'image/png' },
      { url: '/vlricon.ico', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/vlricon.ico' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}