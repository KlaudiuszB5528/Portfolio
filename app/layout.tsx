import "styles/globals.css";

import { Amiri_Quran, Island_Moments } from "next/font/google";

export const metadata = {
  title: "Klaudiusz Biegacz - Frontend Developer",
  description: "Klaudiusz Biegacz frontend developer portfolio page",
};

const amiri = Amiri_Quran({
  weight: "400",
  variable: "--font-amiri",
  display: "swap",
  subsets: ["latin"],
});
const island = Island_Moments({
  weight: "400",
  variable: "--font-island",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${island.variable} ${amiri.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
