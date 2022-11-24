import Head from 'next/head'

export default function Home() {

  return (
    <div className='bg-w-1 w-full min-h-screen bg-cover md:bg-center bg-right-top'>
      <Head>
        <title>PokeData</title>
        <meta name="description" content="Pokemons data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container mx-auto p-2'>
        Hello
      </main>
    </div>
  )
}

// Obrazy z walpapercave.com