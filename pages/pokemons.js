import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(res => {
                setPokemons(res.data.results);
            })
            .catch(err => {
                console.log(err);
                alert('Error: ' + err);
            })
    }, []);
    return (
        <div className='bg-w-2 w-full min-h-screen bg-cover md:bg-center bg-right-top'>
            <Head>
                <title>PokeData - Pokemony</title>
                <meta name="description" content="Pokemons" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='py-9'>
            </div>
            <main className='container mx-auto p-2'>
                {pokemons?.sort(function (a, b) {
                    return a.name.localeCompare(b.name);
                }).map((pokemon, index) => {
                    return (
                        <div key={index} className='bg-black/25 backdrop-blur border border-amber-400/25 p-2 rounded-md mb-2 uppercase'>
                            {pokemon.name}
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

// Obrazy z walpapercave.com