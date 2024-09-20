"use client"
import MainMenu from './main-menu'
import Logo from './(icon)/Logo'
import NotificationBadge from './notification-badge';
import { useAppSelector } from '../app/redux/hooks';


const Nav: React.FC = () => {
  const count = useAppSelector((state) => state.shoppingBag.count);

  return (
    <div className='flex flex-row justify-between items-center'>
        <MainMenu/>
        <Logo/>
        
        <NotificationBadge count={count}/>
    </div>
  )
}

export default Nav