// app/shopping/page.tsx
import IdCard from '../../components/IdCard';
import ShoppingBag from '../../components/ShoppingBag';

export default function ShoppingPage() {
  return (
    <div className="flex justify-between p-4">
      <div>
        <h1>Products</h1>
        <IdCard id="1" name="Product 1" path="/product1" description="Description 1" />
        <IdCard id="2" name="Product 2" path="/product2" description="Description 2" />
      </div>
      <ShoppingBag />
    </div>
  );
}