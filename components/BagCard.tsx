// components/BagCard.tsx
// import { useAppDispatch } from '../app/redux/hooks'  // We'll create this file next
//import { addToBag } from '../app/redux/features/shoppingBag/shoppingBagSlice'
import { useAppSelector } from '../app/redux/hooks';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const BagCard: React.FC = ({ route }) => {
//   const dispatch = useAppDispatch();

//from components/BagCard.tsx, if bagItems is an array of object
// how to render bagItems in pre tag
  const bagItems = useAppSelector((state) => state.shoppingBag.items);
  const total = useAppSelector((state) => state.shoppingBag.totalPrice);
  const count = useAppSelector((state) => state.shoppingBag.count);

  return (
    <div>BagCard
        <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <pre>route: {route}</pre>
    <p>Card Content</p>
    {/* <pre>
            {JSON.stringify(bagItems, null, 2)} 
          </pre> */}
    <pre>count: {count}</pre>
    {bagItems.length === 0 ? (
          <p>Your shopping bag is empty.</p>
        ) : (
            <>
          <ul>
            {bagItems.map((item) => (
              <div key={item.id}>
                <img src={item.path} alt="" />
                <p>รหัส ID: {item.id}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                </div>
            ))}
          </ul>
          <p>รวมทั้งหมด: {total}฿</p>
            {route !== 'order' && (
  <Link href="/order">
    <Button>สั่งซื้อสินค้า</Button>
  </Link>
)}

{/* //from components/BagCard.tsx if route=order hide*/}

          {/* <Link href='/order'>
          <Button>สั่งซื้อสินค้า</Button>
          </Link> */}
          </>
        )}
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    </div>
  )
}

export default BagCard