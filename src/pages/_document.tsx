import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="dark">
      <Head />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <meta name="theme-color" content="#2B125A" />
      <title>Yack</title>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
