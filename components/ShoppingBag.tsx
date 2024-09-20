// components/ShoppingBag.tsx
"use client"

import React from 'react';
import { useAppSelector } from '../app/redux/hooks';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShoppingBag: React.FC = () => {
  const bagItems = useAppSelector((state) => state.shoppingBag.items);
  const count = useAppSelector((state) => state.shoppingBag.count);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Shopping Bag
          {count} items
        </CardTitle>
      </CardHeader>
      <CardContent>
        {bagItems.length === 0 ? (
          <p>Your shopping bag is empty.</p>
        ) : (
          <ul>
            {bagItems.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default ShoppingBag;