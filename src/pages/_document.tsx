import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet='utf-8' />
        <meta name="application-name" content="PWA App" />
        <link rel="manifest" href="/manifest.json" />
        <link rel='image' href='/images/logo.png' />
        <link ref='icon' href='icons/search.svg' />
        <link rel='icon' href='/icons/sign-in.svg' />
        <link rel='icon' href='/icons/dot.svg' />
        <link rel='icon' href='/icons/menu.svg' />
        <link rel='icon' href='/icons/delete.svg' />
        <link rel='icon' href='/icons/facebook.svg' />
        <link rel='icon' href='/icons/twitter.svg' />
        <link rel='icon' href='/icons/instagram.svg' />

        <link rel='icon' href='/favicon.png' />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
    