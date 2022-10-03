import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Movies from '../components/Movies'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu Michael Monteiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Nav />

      {/* Results */}
      <Movies />

    </div>
  )
}
