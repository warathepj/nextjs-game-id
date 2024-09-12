// app/product/page.tsx/
// how to render data from database/games.json
//in app/product/page.tsx/pre tag
"use client"
import Card from '@/components/Card'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const Product = () => {
  const [games, setGames] = useState([]);
     useEffect(() => {
       const fetchData = async () => {
         const response = await fetch('../../database/games.json'); 
         const data = await response.json();
         setGames(data.games);
       };
       fetchData();
     }, []);

  return (
    <div>Product
      <pre>
           {JSON.stringify(games, null, 2)} 
         </pre>
      <Link href="/category/test">
      <Card/>
      </Link>
    </div>
  )
}

export default Product