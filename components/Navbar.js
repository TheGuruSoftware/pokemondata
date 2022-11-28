import Link from "next/link"

export default function Navbar({ children }) {
    return (
        <nav className='fixed left-0 top-0 w-full from-light/40 to-primary/40 bg-gradient-to-t backdrop-blur border-b border-primary/25 z-40'>
            <div className='justify-between flex align-middle items-center p-3 container mx-auto'>
                <Link href='/'>
                    <h3 className='btn-primary text-2xl p-2 font-bold duration-300 border-none'>PokeData</h3>
                </Link>
                <div className='flex gap-0 md:gap-6'>
                    <Link href='/pokemons'>
                        <div className='btn-primary'>Pokemony</div>
                    </Link>
                    <Link href='/abilities'>
                        <div className='btn-primary'>Umiejętności</div>
                    </Link>
                    <Link href='/gallery'>
                        <div className='btn-primary'>Galeria</div>
                    </Link>
                </div>
            </div>
            {children}
        </nav>
    )
}