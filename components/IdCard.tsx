// components/IdCard.tsx
"use client"

import { ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { useAppDispatch } from '../app/redux/hooks'  // We'll create this file next
import { addToBag } from '../app/redux/features/shoppingBag/shoppingBagSlice'


// import { addProduct } from '@/redux/features/shoppingBag/shoppingBagSlice';
// import { addProduct } from '@/app/redux/features/shoppingBag/shoppingBagSlice';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import BagCard from './BagCard'

interface IdCardProps {
  id: string;
  name: string;
  path: string;
  description: string;
  price: number;
  count: number;
}
//change this code to typescript 
// //////////////////////sample from local


// const SubscriptionPlans = () => {
//   const profile = useSelector((state) => state.profile);
//   const interests = useSelector((state) => state.interests.interests);
//   const hobbies = useSelector((state) => state.hobbies.hobbies);


///////////////////////sample from local
const IdCard: React.FC<IdCardProps> = ({ id, name, path, description, price }) => {
  // const shoppingBag = useSelector((state) => state.shoppingBag);

// const IdCard = ({ id, name, path, description }) => {
  // const [shoppingBag, setShoppingBag] = useState([]);

  const dispatch = useAppDispatch();
 
  const handleAddToBag = () => {
    // const product = { id, name, path, description, price: 199 }; // Add price
    // dispatch(addProduct(product));
    const product = { id, name, path, description, price };
    dispatch(addToBag(product));
  };

  return (
    <Card className="w-[350px] hover:w-[370px] mb-4">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <pre>{id}</pre>
        <p>{price}฿</p>

{/* //when click components/ProductCard.tsx/ */}
<Popover>
  <PopoverTrigger>
  <p 
  className="cursor-pointer hover:scale-105 transition-all duration-200"
  onClick={handleAddToBag}>หยิบใส่ถุง</p>
  </PopoverTrigger>
  <PopoverContent>
    <p>ถุงสินค้าของคุณ</p>
    <BagCard/>
  </PopoverContent>
</Popover>


        {/* add id as object to shoppingBag */}
        <ShoppingBag />

      </CardContent>
      <img src={path} alt="" />
    </Card>
  )
}

export default IdCard