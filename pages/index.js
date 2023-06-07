import Head from 'next/head'
import { Inter } from 'next/font/google'
import { LevelSelector } from './components/levelselector'
import { ComposerSearch } from './components/composerSearch'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>JW Pepper String Orchestra Catalogue</h1>
        <Link href={'/pages/searchbycomposer'}>Search by Composer</Link>
        <LevelSelector />
      </main>
    </>
  )
}
