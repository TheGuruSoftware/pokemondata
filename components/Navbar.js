import Link from "next/link";

export default function Navbar({ children }) {
    return (
        <nav className='fixed left-0 top-0 w-full bg-amber-400/25 backdrop-blur border-b border-amber-400/25 z-40'>
            <div className='justify-between flex align-middle items-center p-3 container mx-auto'>
                <Link href='/'>
                    <h3 className='text-2xl font-bold text-white hover:text-amber-200 transition p-2'>PokeData</h3>
                </Link>
                <div className='flex gap-0 md:gap-4'>
                    <Link href='/pokemons'>
                        <div className='text-white p-2 cursor-pointer hover:text-amber-400 transition'>Pokemony</div>
                    </Link>
                    <Link href='/abilities'>
                        <div className='text-white p-2 cursor-pointer hover:text-amber-400 transition'>Umiejętności</div>
                    </Link>
                    <Link href='/gallery'>
                        <div className='text-white p-2 cursor-pointer hover:text-amber-400 transition'>Galeria</div>
                    </Link>
                </div>
            </div>
            {children}
        </nav>
    );
}