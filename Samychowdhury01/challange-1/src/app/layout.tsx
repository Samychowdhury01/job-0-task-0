import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "@/lib/Provider";
import NavbarComponent from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FYTOBYTE",
  description: "your web helper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Provider>
          <div className="relative">
            <div className="absolute z-50 top-7 w-full ">
              <NavbarComponent />
            </div>
            {children}
            <Footer/>
          </div>
        </Provider>
      </body>
    </html>
  );
}
