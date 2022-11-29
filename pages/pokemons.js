import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react'
import BlurImage from '../components/BlurImage'

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(res => {
                var data = res.data.results
                data = data.sort(function (a, b) {
                    return a.name.localeCompare(b.name)
                })
                data.forEach(p => {
                    p.id = (p.url.slice(0, -1))
                    p.id = p.id.slice(p.id.lastIndexOf('/') + 1)
                    axios.get(p.url)
                        .then(res => {
                            p.weight = res.data.weight
                            p.height = res.data.height
                            p.forms = res.data.forms
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
                setPokemons(data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                alert('Error: ' + err)
            })

    }, [])
    return (
        <div className='bg-w-2 bg-fixed h-full bg-cover md:bg-center bg-right-top'>
            <Head>
                <title>PokeData - Pokemony</title>
                <meta name="description" content="Pokemons" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='py-9'>
            </div>
            <main className='mx-auto p-2 max-w-5xl'>
                {!loading && pokemons?.map((pokemon, index) => {
                    return (<div key={index} >
                        <div className='flex gap-8 p-4 rounded text-light from-light/40 to-primary/40 bg-gradient-to-br backdrop-blur'>
                            <div>
                                <h3 className='text-center uppercase'>
                                    {pokemon.name}
                                    <hr className='spacer-primary via-secondary'></hr>
                                </h3>
                                <div className='p-2'>
                                    <BlurImage src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/${pokemon.id}.png`} width={128} height={128} alt={`${pokemon.id}.png`} />
                                </div>
                            </div>
                            <div className='justify-between flex'>
                                <div>Waga: {pokemon.height}</div>
                            </div>
                        </div>
                        <hr className='spacer-primary via-light my-4 h-[3px]'></hr>
                    </div>)
                })}
            </main>
        </div>
    )
}

// Obrazy z walpapercave.com