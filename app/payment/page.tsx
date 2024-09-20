"use client"
import { useAppSelector } from '@/app/redux/hooks';
import { useDispatch } from 'react-redux';
import { resetCount } from '../redux/features/shoppingBag/shoppingBagSlice';
import BagCard from '@/components/BagCard'
import Qrcode from '@/components/Qrcode';
import { FileUp } from 'lucide-react';
import Link from 'next/link';

const Payment = () => {
  const email = useAppSelector((state) => state.email.value);
  // const bagItems = useAppSelector((state) => state.shoppingBag.items);
  // const total = useAppSelector((state) => state.shoppingBag.totalPrice);
  // const count = useAppSelector((state) => state.shoppingBag.count);
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetCount());
  };

  return (
    <div>Payment
        <pre>email: {email}</pre>
        <BagCard route="order"/>
        <Qrcode/>
        <Link 
          onClick={handleReset}
          href="/delivery">
        <FileUp/>
</Link>
    </div>
  )
}

export default Payment