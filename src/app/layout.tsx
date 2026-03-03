import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Belal Elshafei | Software Engineer & Back-End Developer",
  description: "Software Engineer & Back-End Developer specializing in Node.js, C++, and Competitive Programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="antialiased selection:bg-emerald-500/30 selection:text-emerald-300 font-sans"
      >
        {children}
      </body>
    </html>
  );
}
