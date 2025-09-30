import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" >
      <Head>
        <title>Dashboard UI</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="Dashboard UI is modern web application" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}