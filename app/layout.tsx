import type { Metadata } from "next";
import { Saira_Semi_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "normalize.css";
import Providers from "./providers";

// const Saira = Saira_Semi_Condensed({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sound Roots Mentorship",
  description: "Affordable live audio education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
