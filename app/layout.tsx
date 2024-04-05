import type { Metadata } from "next";
import { Saira_Semi_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "normalize.css";
import Providers from "./providers";
import getPosts from "@/lib/getPosts";

// const Saira = Saira_Semi_Condensed({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sound Roots Mentorship",
  description: "Affordable live audio education",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = await getPosts();
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Navbar posts={posts} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
