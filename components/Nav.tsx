import Link from 'next/link';

import MainMenu from './main-menu'
import { ShoppingBag } from 'lucide-react'
import Logo from './(icon)/Logo'

const Nav = () => {
  return (
    <div className='flex flex-row justify-between items-center'>
        <MainMenu/>
        <Logo/>
        <Link 
                className="hover:cursor-pointer"

        href="/shopping-bag">
        <ShoppingBag/>
        </Link>
    </div>
  )
}

export default Nav