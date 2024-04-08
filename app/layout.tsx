import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "normalize.css";
import Providers from "./providers";
import getPosts from "@/lib/getPosts";



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
