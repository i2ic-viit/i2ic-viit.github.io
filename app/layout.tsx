
import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Noto_Sans, Raleway } from "next/font/google";
import Navbar from "@/components/new-navbar";
import { Footer } from "@/components/footer";

const raleway = Raleway({
  weight: ["300", "400", "600"],
  variable: "--font-raleway",
  subsets: ["latin"],
})

const montserrat = Montserrat({
  weight: ["300", "400", "600"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const noto_sans = Noto_Sans({
  weight: ["600"],
  variable: "--font-noto-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "I2IC - VIIT",
  description: "Industry Institution Interaction Council (VIIT, Pune) - Empowering Students: Connecting Education with Industry for Success",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${montserrat.variable} ${raleway.variable} ${noto_sans.variable} antialiased`}
      >
        <Navbar/>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
