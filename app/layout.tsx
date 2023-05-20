import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to LangFella",
};

import Head from "next/head";
import "styles/global.css";
import "styles/style.css";
import BottomNavigation from "./components/BottomNavigation";

export default function MyApp({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <body>
        <div className="mb-24">{children}</div>
        <BottomNavigation></BottomNavigation>
      </body>
    </html>
  );
}
