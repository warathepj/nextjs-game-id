// components/IdCard.tsx
"use client"

import { ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// import { addProduct } from '@/redux/features/shoppingBag/shoppingBagSlice';
import { addProduct } from '@/app/redux/features/shoppingBag/shoppingBagSlice';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

interface IdCardProps {
  id: string;
  name: string;
  path: string;
  description: string;
}
//change this code to typescript 
// //////////////////////sample from local


// const SubscriptionPlans = () => {
//   const profile = useSelector((state) => state.profile);
//   const interests = useSelector((state) => state.interests.interests);
//   const hobbies = useSelector((state) => state.hobbies.hobbies);


///////////////////////sample from local
const IdCard: React.FC<IdCardProps> = ({ id, name, path, description }) => {
  // const dispatch = useDispatch();
// const IdCard = ({ id, name, path, description }) => {
  // const [shoppingBag, setShoppingBag] = useState([]);
  const handleAddToBag = () => {
    const product = { id, name, path, description, price: 199 }; // Add price
    // dispatch(addProduct(product));
  };
  return (
    <Card className="w-[350px] hover:w-[370px] mb-4">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <pre>{id}</pre>
        <p>199฿</p>

{/* //when click components/ProductCard.tsx/ */}
<p onClick={handleAddToBag}>หยิบใส่ถุง</p>
        {/* add id as object to shoppingBag */}
        <ShoppingBag />

      </CardContent>
      <img src={path} alt="" />
    </Card>
  )
}

export default IdCard