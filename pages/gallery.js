import Head from 'next/head'

export default function Gallery() {

    return (
        <div className='bg-w-3 w-full h-screen bg-cover md:bg-center bg-right-top'>
            <Head>
                <title>PokeData - Galeria</title>
                <meta name="description" content="Gallery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='py-9'>
            </div>
            <main className='container mx-auto p-2'>
                Galeria
            </main>
        </div>
    )
}

// Obrazy w tle - walpapercave.com