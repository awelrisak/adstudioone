import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ad Studio One",
  description: "View Banner Design",
};

import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main className="p-3 overflow-x-auto mx-auto max-w-2xl h-[calc(100vh-72px)]">
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
