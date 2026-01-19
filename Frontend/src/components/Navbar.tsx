import Link from 'next/link'
import AuthButtons from './AuthButtons'

const Navbar = () => {

    const links = [
        {href: '/', label: 'Home'},
        {href: '/watchList', label: 'Watch List'},
    ]

  return (
    <nav className='flex text-2xl font-bold text-[#38BDF8] justify-between items-center p-4'>
        <h1 className='mr-6'>BingeWatchIt</h1>
        <div>
            <ul className='flex items-center'>
                {links.map((link) => (
                    <ul key={link.href} className='ml-6'>
                        <Link href={link.href}>{link.label}</Link>
                    </ul>
                ))}
            </ul>
        </div>
        <div>
            <AuthButtons />
        </div>
    </nav>
  )
}

export default Navbar
