import type React from "react"
import "./styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShieldSync - Effortless Cloud Storage Backups for Azure",
  description:
    "ShieldSync automates cloud backups, protects against data loss, and ensures instant recovery all with enterprise-grade security.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

