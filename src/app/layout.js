import localFont from "next/font/local";
import "./globals.css";
import TanstackQueryProvider from "../components/partials/provider/TanstackQueryProvider";
import { Toaster } from "react-hot-toast";
import Header from "../components/template/Header";
import Footer from "../components/template/Footer";
import Layout from "../components/layout/Layout";

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

export const metadata = {
  title: "تورینو | خرید تخصصی تور های خارجی",
  description: "خرید تور های خارجی با قیمت مناسب به همراه راهنمای تخصصی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackQueryProvider suppressHydrationWarning={true}>
            <Toaster />
            {children}
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
