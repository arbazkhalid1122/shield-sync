import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShieldSync - Effortless Cloud Storage Backups for Azure",
  description:
    "ShieldSync automates cloud backups, protects against data loss, and ensures instant recovery all with enterprise-grade security.",
  openGraph: {
    title: "ShieldSync - Effortless Cloud Storage Backups for Azure",
    description:
      "ShieldSync automates cloud backups, protects against data loss, and ensures instant recovery all with enterprise-grade security.",
    images: [
      {
        url: "https://i.ibb.co/hRMTzRnd/Frame-1.png",
        width: 1200,
        height: 630,
        alt: "ShieldSync Cloud Backup Illustration",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
