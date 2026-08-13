import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "California Storm — WordPress Experience Rebuild",
  description:
    "A product design and development portfolio case study for the California Storm WordPress transformation.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
