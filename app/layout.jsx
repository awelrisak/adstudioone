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
        <main className=" px-3 py-7 overflow-y-auto mx-auto max-w-2xl h-[calc(100vh-60px)] scrollbar scrollbar-thumb-red-600">
          <section>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
