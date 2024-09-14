// app/category/[categoryId]/page/
"use client"

import { useState, useEffect } from 'react';
import IdCard from '@/components/IdCard'
import Link from 'next/link';

interface Id {
  path: string;
  id: string;
  name: string;
  description: string;
}

const CategoryId = ({ params }) => {
  const param = params.categoryId;
  const productId = "2";
  const [ids, setIds] = useState<Id[] | null>(null);

  useEffect(() => {
    const fetchIds = async () => {
      const response = await fetch('/database/scids.json');
      const data = await response.json();
      setIds(data.ids);
    };

    fetchIds();
  }, []);

  return (
    <div>CategoryId
      {/* ref ai gal */}
      <pre>param : {param}</pre>

      {ids ? (
        <pre>
          {ids.map((id) => (
            <div key={id.id}>
              {/* <Link href={`/category/${id.code}`}> */}
                <IdCard
                  id={id.id}
                  path={id.path}
                  name={id.name} 
                  description={id.description} 
                />
              {/* </Link> */}
            </div>
          ))}
        </pre>
      ) : (
        <p>Loading games...</p>
      )}

        {/* <Link href={`/category/${param}/product/${productId}`}> */}

        <IdCard/>
    {/* </Link> */}
    </div>
  )
}

export default CategoryId