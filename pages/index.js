import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>JWPepper Catalogue</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>About</h2>
        <p className='container'>
          This project is a searchable catalogue of string orchestra works on JWPepper. I scraped some basic data about these works using Python and BeautifulSoup, then compiled the information into a .json file. This webapp provides several different ways of searching through these works. This webapp is written using Next.js. All the code is available at this <a href='https://github.com/mmnessim/jwpepper' rel='noreferrer' target='_blank'>Github Repository</a>.
        </p>
      </main>
    </>
  )
}
