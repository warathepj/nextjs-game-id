// app/shopping-bag/page.tsx
"use client"
    import { useSelector } from 'react-redux';
    import { RootState } from '@/redux/store'; // Update path if needed
    
    const ShoppingBag: React.FC = () => {
      const shoppingBag = useSelector((state: RootState) => state.shoppingBag.items);
    
      return (
        <div>
          <h2>Shopping Bag</h2>
          <ul>
            {shoppingBag.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price}฿
                {/* Add remove item functionality here if needed */}
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default ShoppingBag;
