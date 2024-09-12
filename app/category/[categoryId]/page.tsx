// app/category/[categoryId]/page/
import ProductCard from '@/components/ProductCard'
import Link from 'next/link';


const CategoryId = ({ params }) => {
  const param = params.categoryId;
  const productId = "2";

  return (
    <div>CategoryId
      {/* ref ai gal */}
      <pre>param : {param}</pre>
        <Link href={`/category/${param}/product/${productId}`}>
{/* <Link 
      key={image.path} 
      href={`/category/${params.categoryId}/image/${image.path}`}> */}
        <ProductCard/>
    </Link>
    </div>
  )
}

export default CategoryId