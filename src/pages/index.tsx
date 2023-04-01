import Head from 'next/head'
import React from 'react'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>LEIRBAG TATTOO</title>
       </Head>

      <main >
        <h1>Leibarg tattoo</h1>
      </main>
    </div>
  )
}
export default Home
