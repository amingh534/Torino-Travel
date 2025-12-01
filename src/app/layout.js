import "./globals.css";
import TanstackQueryProvider from "../components/partials/provider/TanstackQueryProvider";
import { Toaster } from "react-hot-toast";
import Layout from "../components/layout/Layout";
import { yekanBakh } from "@/utils/fonts";


export const metadata = {
  title: "تورینو | خرید تخصصی تور های خارجی",
  description: "خرید تور های خارجی با قیمت مناسب به همراه راهنمای تخصصی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={yekanBakh.className}  >
        <TanstackQueryProvider suppressHydrationWarning={true}>
          <Toaster />
          <Layout>{children}</Layout>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
