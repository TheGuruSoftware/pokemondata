import Navbar from '../components/Navbar'
export default function Layout({ children }) {
    return (
        <div className='bg-black text-white'>
            <Navbar />
            {children}
        </div>
    );
}