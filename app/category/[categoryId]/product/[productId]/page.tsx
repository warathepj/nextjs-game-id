// app/category/[categoryId]/product/[productId]/page.tsx/
"use client"
import { useState, useEffect } from 'react';

interface Id {
  path: string;
  id: string;
  name: string;
  description: string;
}
const ProductId = ({ params }) => {
    const param = params.productId;
    const [ids, setIds] = useState<Id[] | null>(null);
  
    useEffect(() => {
      const fetchIds = async () => {
        const response = await fetch('/database/scids.json');
        const data = await response.json();
        setIds(data.ids);
      };
  
      fetchIds();
    }, []);
  
    const id: Id | undefined = ids?.find(id => id.id.includes(param));
    
    return (
      <div>ProductId
        <pre>param : {param}</pre>
  
        {id ? (
            <>
            <img src={id.path} alt="" />
          <pre>name: {id.name}</pre> 
          <pre>description: {id.description}</pre> 
          <pre>price: {id.price}฿</pre> 
          {/* <pre>path: {id.path}</pre>  */}
            </>
        ) : (
          <p>Loading...</p>
        )}
        
      </div>
    )
  }

export default ProductId
