import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from './components/document/header'
import { NavBar } from './components/document/nav'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
      </Head>
      <body>
        <Header />
        <NavBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
