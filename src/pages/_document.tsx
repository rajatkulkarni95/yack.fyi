import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="dark">
      <Head />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <meta name="theme-color" content="#2B125A" />
      <title>Yack</title>
      <script
        defer
        type="text/javascript"
        src="https://api.pirsch.io/pirsch-extended.js"
        id="pirschextendedjs"
        data-code="npx5HRWran8hDufpVeNuiOHfnQAEVDr2"
      ></script>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
