// app/category/[categoryId]/page/
"use client"

import { useState, useEffect } from 'react';
import IdCard from '@/components/IdCard'
import Link from 'next/link';
import { useAppSelector } from '../../../app/redux/hooks';

interface Id {
  path: string;
  id: string;
  name: string;
  description: string;
  price: number;
  count: number;
  tag: string[];
}

const CategoryId = ({ params }) => {
  const param = params.categoryId;
  // const productId = "2";
  const [ids, setIds] = useState<Id[] | null>(null);
  const count = useAppSelector((state) => state.shoppingBag.count);
  const id = ids ? ids.filter(id => id.tag.includes(param)) : null;
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

      {id ? (
        <pre>
          {id.map((i) => (
            <div key={i.id}>
              {/* <Link href={`/category/${param}/product/${id.id}`}> */}
                <IdCard
                  id={i.id}
                  path={i.path}
                  name={i.name} 
                  description={i.description} 
                  price={i.price} 
                  count={count} 
                />
              {/* </Link> */}
            </div>
          ))}
        </pre>
      ) : (
        <p>Loading games...</p>
      )}
      <p>/////////////////////</p>
      {/* {ids ? ( */}
        {/* <pre> */}
          {/* {ids.map((id) => ( */}
            {/* <div key={id.id}> */}
              {/* <Link href={`/category/${param}/product/${id.id}`}> */}
                {/* <IdCard
                  id={id.id}
                  path={id.path}
                  name={id.name} 
                  description={id.description} 
                  price={id.price} 
                  count={count} 
                /> */}
              {/* </Link> */}
            {/* </div> */}
          {/* // ))} */}
        {/* // </pre> */}
      {/* // ) : ( */}
        {/* // <p>Loading games...</p> */}
      {/* // )} */}

        {/* <Link href={`/category/${param}/product/${productId}`}> */}

        <IdCard/>
    {/* </Link> */}
    </div>
  )
}

export default CategoryId