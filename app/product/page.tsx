// app/product/page.tsx/
//in app/product/page.tsx/ how to loop and 
// render games.name in pre tag
"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';

interface Game {
  path: string;
  code: string;
  name: string;
}

const Product = () => {

  const [games, setGames] = useState<Game[] | null>(null);
  const [name, setName] = useState('John Doe');

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('/database/games.json');
      const data = await response.json();
      setGames(data.games);
    };

    fetchGames();
  }, []);

  return (
    <div>Product
      {games ? (
        <pre>
          {games.map((game) => (
            <div key={game.code}>
              <Link href={`/category/${game.code}`}>
                <ProductCard
                  path={game.path}
                  name={game.name} />
              </Link>
            </div>
          ))}
        </pre>
      ) : (
        <p>Loading games...</p>
      )}

      {games ? (
        <pre>{JSON.stringify(games, null, 2)}</pre>
      ) : (
        <p>Loading games...</p>
      )}

    </div>
  )
}

export default Product