import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Roche",
  description: "Roche Next.js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
