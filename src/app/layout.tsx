import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-godwit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata: Metadata = {
  title: "Jumat Berkah — Bantu Hadirkan 50+ Box Makanan untuk Jamaah",
  description:
    "Program berbagi makanan dan minuman kepada jamaah serta masyarakat sekitar Masjid At-Taufiq, Coblong, Bandung. Target donasi Rp500.000 – Rp750.000.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={dmSans.variable}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}