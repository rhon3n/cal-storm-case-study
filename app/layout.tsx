import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "California Storm — WordPress Experience Rebuild",
  description:
    "A product design and development portfolio case study for the California Storm WordPress transformation.",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @font-face { font-family: "Barlow"; src: url("${basePath}/fonts/barlow-regular.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
          @font-face { font-family: "Barlow"; src: url("${basePath}/fonts/barlow-semibold.woff2") format("woff2"); font-weight: 600; font-style: normal; font-display: swap; }
          @font-face { font-family: "Barlow Condensed"; src: url("${basePath}/fonts/barlow-condensed-extrabold.woff2") format("woff2"); font-weight: 800; font-style: normal; font-display: swap; }
          @font-face { font-family: "Barlow Condensed"; src: url("${basePath}/fonts/barlow-condensed-black-italic.woff2") format("woff2"); font-weight: 900; font-style: italic; font-display: swap; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
