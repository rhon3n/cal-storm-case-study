import type { Metadata } from "next";
import "./globals.css";
import { assetPath } from "./asset-path";

export const metadata: Metadata = {
  title: "California Storm — WordPress Experience Rebuild",
  description:
    "A product design and development portfolio case study for the California Storm WordPress transformation.",
  icons: {
    icon: assetPath("favicon.svg"),
    shortcut: assetPath("favicon.svg"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
